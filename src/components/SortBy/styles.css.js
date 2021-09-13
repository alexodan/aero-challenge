import styled from "styled-components";
import { Colors } from "../../styles.css";

export const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 30px;

  span {
    font-weight: 700;
    margin-right: 10px;
    letter-spacing: 0.5px;
  }
`;

export const Option = styled.button`
  background-color: ${(props) =>
    props.selected ? Colors.Primary : Colors.Secondary};
  border: none;
  color: white;
  cursor: pointer;
  padding: 5px;
  font-size: 18px;
`;
