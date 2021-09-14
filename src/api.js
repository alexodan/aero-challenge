import axios from "axios";

// TODO: put this in an .env
const API_TOKEN =
  process.env.API_TOKEN ||
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTNiYzQ5MThiZWIxNjAwMjFiODM5Y2UiLCJpYXQiOjE2MzEzMDY4OTd9.vzMoLzdkbhWt5bADuerq0z515bWcWfokybSd8t1pntA";

const options = {
  headers: { Authorization: API_TOKEN },
};

export const fetchProducts = async () => {
  const { data } = await axios.get(
    "https://coding-challenge-api.aerolab.co/products",
    options
  );
  return {
    products: data,
  };
};

export const fetchUserData = async () => {
  const { data } = await axios.get(
    "https://coding-challenge-api.aerolab.co/user/me",
    options
  );
  return {
    user: data,
  };
};

export const redeemProduct = (id) => {
  return axios.post(
    "https://coding-challenge-api.aerolab.co/redeem",
    {
      productId: id,
    },
    options
  );
};

export const addPoints = (points) => {
  return axios.post(
    "https://coding-challenge-api.aerolab.co/user/points",
    {
      amount: points,
    },
    options
  );
};
