import React from "react";
import styled from "styled-components";
import Header from "../components/layout/Header";
import HomeBanner from "../components/module/home/HomeBanner";
const HomePageStyled = styled.div``;
const HomePage = () => {
  return (
    <HomePageStyled>
      <Header></Header>
      <HomeBanner></HomeBanner>
    </HomePageStyled>
  );
};

export default HomePage;
