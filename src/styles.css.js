import styled from "styled-components";
import { Colors, MediaQueries } from "./constants";

export const StyledApp = styled.div`
  width: 100%;
  max-width: 1200px;
  margin-right: auto;
  margin-left: auto;
  box-sizing: border-box;
`;

export const StyledToolbar = styled.div`
  display: flex;
`;

export const StyledHeader = styled.div`
  background-color: white;
  display: flex;
  height: 70px;
  justify-content: space-between;
  padding: 10px 20px;

  div {
    align-items: center;
    display: flex;

    h2 {
      font-size: 28px;
      margin-right: 10px;
      display: none;

      ${MediaQueries.FromMobile} {
        display: block;
      }
    }

    button {
      align-items: center;
      background: ${Colors.Secondary};
      border: none;
      border-radius: 200px;
      cursor: pointer;
      display: flex;
      font-weight: 700;
      justify-content: space-around;
      padding: 2px 5px 0 5px;
      width: 85px;
    }
  }
`;
