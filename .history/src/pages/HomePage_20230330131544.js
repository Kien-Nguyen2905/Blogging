import React from "react";
import styled from "styled-components";
import Header from "../components/header/Header";
const HomePageStyled = styled.div``;
const HomePage = () => {
  return (
    <HomePageStyled>
      <div className="container">
        <Header></Header>
      </div>
    </HomePageStyled>
  );
};

export default HomePage;
