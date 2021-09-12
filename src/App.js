import { useEffect, useState } from "react";
import axios from 'axios';
import ProductsGrid from "./components/ProductsGrid";
import { StyledApp } from "./styles.css";

// TODO: put this in an .env
const API_TOKEN = process.env.API_TOKEN || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTNiYzQ5MThiZWIxNjAwMjFiODM5Y2UiLCJpYXQiOjE2MzEzMDY4OTd9.vzMoLzdkbhWt5bADuerq0z515bWcWfokybSd8t1pntA';

function App() {
  const [loading, setLoading] = useState(true);
  const [points, setPoints] = useState(null);
  const [products, setProducts] = useState([]);

  // TODO: clean up using hooks
  useEffect(() => {
    axios
      .get('https://coding-challenge-api.aerolab.co/user/me', {
        headers: { 'Authorization': API_TOKEN }
      })
      .then(({ data }) => {
        const { _id, name, points, redeemHistory } = data;
        setLoading(false);
        setPoints(points);
      });
  }, []);

  useEffect(() => {
    axios
      .get('https://coding-challenge-api.aerolab.co/products', {
        headers: { 'Authorization': API_TOKEN }
      })
      .then(({ data }) => {
        setLoading(false);
        setProducts(data);
      });
  }, []);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <StyledApp>
      <ProductsGrid products={products} />
    </StyledApp>
  );
}

export default App;
