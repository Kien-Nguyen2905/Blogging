import React from "react";
import styled from "styled-components";
import Layout from "../components/layout/Layout";
import HomeBanner from "../components/module/home/HomeBanner";
const HomePageStyled = styled.div``;
const HomePage = () => {
  return (
    <HomePageStyled>
      <Layout>
        <HomeBanner></HomeBanner>
      </Layout>
    </HomePageStyled>
  );
};

export default HomePage;
