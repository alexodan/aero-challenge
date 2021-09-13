import React from "react";
import ProductCard from "../ProductCard";
import { StyledGrid } from "./styles.css";

const ProductsGrid = ({ products, points, redeemProduct }) => {
  return (
    <StyledGrid>
      {products.map((product) => (
        <ProductCard
          key={product._id}
          {...product}
          points={points}
          redeemProduct={redeemProduct}
        />
      ))}
    </StyledGrid>
  );
};

export default ProductsGrid;
