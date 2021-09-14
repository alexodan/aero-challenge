import React from "react";
import ProductCard from "../ProductCard";
import { StyledGrid } from "./styles.css";

const ProductsGrid = ({
  products,
  points,
  redeemProduct,
  selectedId,
  setSelectedId,
}) => {
  return (
    <StyledGrid>
      {products.map((product) => (
        <ProductCard
          key={product._id}
          _id={product._id}
          name={product.name}
          cost={product.cost}
          category={product.category}
          img={product.img}
          points={points}
          redeemProduct={redeemProduct}
          isSelected={product._id === selectedId}
          setSelectedId={setSelectedId}
        />
      ))}
    </StyledGrid>
  );
};

export default ProductsGrid;
