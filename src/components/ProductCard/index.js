import React from 'react'
import styled from 'styled-components'

const StyledCard = styled.div`
  background-color: white;
  border-radius: 15px;
  .img {
    width: 90%;
    margin: 0 auto;
    display: block;
  }
  .category {

  }
  .name {

  }
  .redeem-button {
    display: flex;
  }
  .price {
    display: flex;
  }
`;

const ProductCard = ({ _id, name, cost, category, img: { url, hdUrl } }, redeemProduct) => {

  const handleClickRedeem = () => {
    redeemProduct(_id);
  }

  return (
    <StyledCard onClick={handleClickRedeem}>
      <img className="img" src={url} alt={name} />
      <h4 className="category">{category}</h4>
      <h3 className="name">{name}</h3>
      <button className="redeem-button">
        <span>Redeem now</span>
        <div className="price">
          <span>{cost}</span>
        </div>
      </button>
    </StyledCard>
  )
}

export default ProductCard
