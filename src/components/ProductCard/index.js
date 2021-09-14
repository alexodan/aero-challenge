import React from "react";
import { motion } from "framer-motion";
import {
  StyledCard,
  StyledDisabledLayer,
  StyledDisabledMessage,
} from "./styles.css";

const spring = {
  type: "spring",
  damping: 25,
  stiffness: 120,
};

const ProductCard = ({
  _id,
  name,
  cost,
  category,
  img: { url },
  redeemProduct,
  points,
  setSelectedId,
}) => {
  const handleClickRedeem = (e) => {
    e.stopPropagation();
    redeemProduct(_id);
  };

  const isPurchasable = points >= cost;

  return (
    <motion.div layout transition={spring}>
      <StyledCard onClick={() => setSelectedId(_id)}>
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
        <button className="redeem-button" onClick={handleClickRedeem}>
          <span>Redeem now</span>
          <div className="price">
            <span>{cost}</span>
            <img src="./icons/coin.svg" alt="coin" />
          </div>
        </button>
      </StyledCard>
    </motion.div>
  );
};

export default ProductCard;
