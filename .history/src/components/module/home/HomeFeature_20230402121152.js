import React from "react";
import Heading from "../../layout/Heading";
import PostFeatureItem from "../post/PostFeatureItem";
import styled from "styled-components";
const HomeFeatureStyled = styled.div``;

const HomeFeature = () => {
  return (
    <HomeFeatureStyled className="home-block">
      <div className="container">
        <Heading>Featured posts</Heading>
        <div className="grid-layout">
          <PostFeatureItem></PostFeatureItem>
          <PostFeatureItem></PostFeatureItem>
          <PostFeatureItem></PostFeatureItem>
        </div>
      </div>
    </HomeFeatureStyled>
  );
};
// Example of error boundary
export default HomeFeature;
