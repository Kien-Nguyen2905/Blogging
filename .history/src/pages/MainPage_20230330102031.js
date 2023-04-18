import React from "react";
import styled from "styled-components";
const MainPageStyled = styled.div`
  min-height: 100vh;
  padding: 40px;
  .logo {
    margin: 0 auto 20px;
  }
  .heading {
    text-align: center;
    color: ${(props) => props.theme.primary};
    font-weight: bold;
    font-size: 40px;
  }
`;
const MainPage = () => {
  return <MainPageStyled></MainPageStyled>;
};

export default MainPage;
