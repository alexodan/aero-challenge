import styled from "styled-components";
import { Colors } from "../../styles.css";

export const StyledCard = styled.div`
  background-color: white;
  border-radius: 10px;
  padding: 5%;
  position: relative;
  .img {
    width: 90%;
    margin: 0 auto 15px;
    display: block;
  }
  .category {
    color: ${Colors.Secondary};
    font-weight: 400;
  }
  .name {
    font-weight: 400;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .redeem-button {
    align-items: center;
    background-color: ${Colors.Primary};
    border: none;
    border-radius: 10px;
    color: white;
    cursor: pointer;
    display: flex;
    font-size: 16px;
    margin: 10px auto 0;
    justify-content: space-between;
    padding: 5px 15px;
    width: 100%;
  }
  .price {
    display: flex;
    align-items: center;

    span {
      font-weight: 700;
    }
  }
`;

export const StyledDisabledLayer = styled.div`
  align-items: center;
  background-color: ${Colors.Secondary};
  color: white;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  position: absolute;
  opacity: 0.8;
`;

export const StyledDisabledMessage = styled.span`
  left: 50%;
  font-size: 18px;
  font-weight: 700;
  position: absolute;
  text-align: center;
  transform: translate(-50%, -50%);
  top: 50%;
  width: 100%;
`;
