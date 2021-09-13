import React from "react";
import {
  StyledCard,
  StyledDisabledLayer,
  StyledDisabledMessage,
} from "./styles.css";

const ProductCard = ({
  _id,
  name,
  cost,
  category,
  img: { url, hdUrl },
  redeemProduct,
  points,
}) => {
  const handleClickRedeem = () => {
    redeemProduct(_id);
  };

  const isPurchasable = points >= cost;

  return (
    <StyledCard onClick={handleClickRedeem}>
      {!isPurchasable && (
        <>
          <StyledDisabledLayer />
          <StyledDisabledMessage>
            You need another {cost - points} coins
          </StyledDisabledMessage>
        </>
      )}
      <img className="img" src={url} alt={name} />
      <h4 className="category">{category}</h4>
      <h3 className="name">{name}</h3>
      <button className="redeem-button">
        <span>Redeem now</span>
        <div className="price">
          <span>{cost}</span>
          <img src="./icons/coin.svg" alt="coin" />
        </div>
      </button>
    </StyledCard>
  );
};

export default ProductCard;
