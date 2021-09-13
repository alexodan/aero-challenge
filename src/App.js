import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import ProductsGrid from "./components/ProductsGrid";
import SortBy from "./components/SortBy";
import Jumbotron from "./components/Jumbotron";
import RedeemMessage from "./components/RedeemMessage";
import { StyledApp, StyledHeader, StyledToolbar } from "./styles.css";
import { addPoints, fetchProducts, fetchUserData, redeemProduct } from "./api";
import { SORT_OPTIONS } from "./constants";

function App() {
  const [userInfo, setUserInfo] = useState({});
  const [sortBy, setSortBy] = useState("highest-price");
  const [message, setMessage] = useState("");
  const { isLoading, data: productsData } = useQuery("products", fetchProducts);
  const { data: userData } = useQuery("user", fetchUserData);
  const products = productsData ? productsData.products : [];

  const handleRedeemProduct = (id) => {
    redeemProduct(id).then(({ data }) => {
      const productRedeemed = products.find((p) => p._id === id);
      setUserInfo((prev) => ({
        ...prev,
        points: prev.points - productRedeemed.cost,
      }));
      setMessage(data.message);
    });
  };

  const handleAddPoints = () => {
    addPoints().then(({ response }) => {
      setUserInfo((prev) => ({ ...prev, points: response["New Points"] }));
    });
  };

  useEffect(() => {
    if (userData) {
      setUserInfo(userData.user);
    }
  }, [userData]);

  const sortedProducts = products?.sort((p1, p2) => {
    if (sortBy === "lowest-price") {
      return p1.cost - p2.cost;
    } else if (sortBy === "highest-price") {
      return p2.cost - p1.cost;
    }
    return 1;
  });

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  return (
    <StyledApp>
      <StyledHeader>
        <img src="./aerolab-logo.svg" alt="Aero Icon" />
        <div>
          <h2>{userInfo.name}</h2>
          <button onClick={handleAddPoints}>
            {userInfo.points} <img src="./icons/coin.svg" alt="coin" />
          </button>
        </div>
      </StyledHeader>
      <Jumbotron background="./img/header-x1.png">
        <h1>Electronics</h1>
      </Jumbotron>
      <StyledToolbar>
        <SortBy sortBy={sortBy} setSortBy={setSortBy} options={SORT_OPTIONS} />
      </StyledToolbar>
      <ProductsGrid
        points={userInfo.points}
        products={sortedProducts}
        redeemProduct={handleRedeemProduct}
      />
      {message && <RedeemMessage message={message} />}
    </StyledApp>
  );
}

export default App;
