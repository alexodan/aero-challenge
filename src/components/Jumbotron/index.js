import React from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  background-image: ${(props) => `url(${props.background})`};
  background-size: cover;
  height: 400px;
  width: 100%;
  display: flex;

  h1 {
    color: white;
    align-self: end;
    margin: 0 0 15px 15px;
    font-size: 36px;
  }
`;

const Jumbotron = ({ background, children }) => {
  return <StyledContainer background={background}>{children}</StyledContainer>;
};

export default Jumbotron;
