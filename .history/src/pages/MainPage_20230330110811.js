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
  .have-account {
    margin-bottom: 20px;
    a {
      display: flex;
      color: ${(props) => props.theme.primary};
      font-weight: 500;
    }
  }
`;
const MainPage = ({ children }) => {
  return (
    <MainPageStyled>
      <div className="container">
        <img srcSet="/logo.png 2x" alt="" className="logo" />
        <h1 className="heading">Monkey Blogging</h1>
        {children}
      </div>
    </MainPageStyled>
  );
};

export default MainPage;
