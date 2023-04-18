import React from "react";
import styled from "styled-components";
import Layout from "../components/layout/Layout";
import HomeBanner from "../components/module/home/HomeBanner";
import HomeFeature from "../components/module/home/HomeFeature";
import HomeNewest from "../components/module/home/HomeNewest";
const HomePageStyled = styled.div``;
const HomePage = () => {
  return (
    <HomePageStyled>
      <Layout>
        <HomeBanner></HomeBanner>
        <HomeFeature></HomeFeature>
        <HowNewest></HowNewest>
      </Layout>
    </HomePageStyled>
  );
};

export default HomePage;
