import { useEffect, useState } from "react";
import axios from "axios";
import ProductsGrid from "./components/ProductsGrid";
import SortBy from "./components/SortBy";
import Jumbotron from "./components/Jumbotron";
import RedeemMessage from "./components/RedeemMessage";
import { StyledApp, StyledHeader, StyledToolbar } from "./styles.css";

const SORT_OPTIONS = [
  {
    value: "lowest-price",
    label: "Lowest Price",
  },
  {
    value: "highest-price",
    label: "Highest Price",
  },
];

// TODO: put this in an .env
const API_TOKEN =
  process.env.API_TOKEN ||
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTNiYzQ5MThiZWIxNjAwMjFiODM5Y2UiLCJpYXQiOjE2MzEzMDY4OTd9.vzMoLzdkbhWt5bADuerq0z515bWcWfokybSd8t1pntA";

function App() {
  const [loading, setLoading] = useState(true);
  const [userData, setUserData] = useState({});
  const [products, setProducts] = useState([]);
  const [sortBy, setSortBy] = useState("lowest-price");
  const [message, setMessage] = useState("");

  // TODO: clean up using hooks
  useEffect(() => {
    axios
      .get("https://coding-challenge-api.aerolab.co/user/me", {
        headers: { Authorization: API_TOKEN },
      })
      .then(({ data }) => {
        const { _id, name, points, redeemHistory } = data;
        setUserData({ _id, name, points, redeemHistory });
      });
  }, []);

  useEffect(() => {
    axios
      .get("https://coding-challenge-api.aerolab.co/products", {
        headers: { Authorization: API_TOKEN },
      })
      .then(({ data }) => {
        setLoading(false);
        setProducts(data);
      });
  }, []);

  const redeemProduct = (id) => {
    axios
      .post(
        "https://coding-challenge-api.aerolab.co/redeem",
        {
          productId: id,
        },
        {
          headers: { Authorization: API_TOKEN },
        }
      )
      .then(({ data }) => {
        const productRedeemed = products.find((p) => p._id === id);
        setUserData((prev) => ({
          ...prev,
          points: prev.points - productRedeemed.cost,
        }));
        setMessage(data.message);
      });
  };

  const addPoints = () => {
    axios
      .post(
        "https://coding-challenge-api.aerolab.co/user/points",
        {
          amount: 2000,
        },
        {
          headers: { Authorization: API_TOKEN },
        }
      )
      .then((response) => {
        setUserData((prev) => ({ ...prev, points: response["New Points"] }));
      });
  };

  const sortedProducts = products.sort((p1, p2) => {
    if (sortBy === "lowest-price") {
      return p1.cost - p2.cost;
    } else if (sortBy === "highest-price") {
      return p2.cost - p1.cost;
    }
    return 1;
  });

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <StyledApp>
      <StyledHeader>
        <img src="./aerolab-logo.svg" alt="Aero Icon" />
        <div>
          <h2>{userData.name}</h2>
          <button onClick={addPoints}>
            {userData.points} <img src="./icons/coin.svg" alt="coin" />
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
        points={userData.points}
        products={sortedProducts}
        redeemProduct={redeemProduct}
      />
      {message && <RedeemMessage message={message} />}
    </StyledApp>
  );
}

export default App;
