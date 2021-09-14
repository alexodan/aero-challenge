import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { AnimatePresence, AnimateSharedLayout } from "framer-motion";
import ProductsGrid from "./components/ProductsGrid";
import SortBy from "./components/SortBy";
import Jumbotron from "./components/Jumbotron";
import ProductDialog from "./components/ProductDialog";
import { SORT_OPTIONS } from "./constants";
import { addPoints, fetchProducts, fetchUserData, redeemProduct } from "./api";
import { StyledApp, StyledHeader, StyledToolbar } from "./styles.css";

function App() {
  const [userInfo, setUserInfo] = useState({});
  const [sortBy, setSortBy] = useState("highest-price");
  const [selectedId, setSelectedId] = useState(null);
  const { isLoading, data: productsData } = useQuery("products", fetchProducts);
  const { data: userData } = useQuery("user", fetchUserData);
  const products = productsData ? productsData.products : [];

  const handleRedeemProduct = (id) => {
    redeemProduct(id).then(() => {
      const productRedeemed = products.find((p) => p._id === id);
      setUserInfo((prev) => ({
        ...prev,
        points: prev.points - productRedeemed.cost,
      }));
    });
  };

  const handleAddPoints = () => {
    addPoints(1000).then(({ data }) => {
      setUserInfo((prev) => ({ ...prev, points: data["New Points"] }));
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
      <AnimateSharedLayout type="crossfade">
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
          <SortBy
            sortBy={sortBy}
            setSortBy={setSortBy}
            options={SORT_OPTIONS}
          />
        </StyledToolbar>
        <ProductsGrid
          points={userInfo.points}
          products={sortedProducts}
          redeemProduct={handleRedeemProduct}
          selectedId={selectedId}
          setSelectedId={setSelectedId}
        />
        <AnimatePresence>
          {selectedId && (
            <ProductDialog
              id={selectedId}
              products={products}
              setSelectedId={setSelectedId}
            />
          )}
        </AnimatePresence>
      </AnimateSharedLayout>
    </StyledApp>
  );
}

export default App;
