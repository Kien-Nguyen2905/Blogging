import React from "react";
import Heading from "../../layout/Heading";
import PostFeatureItem from "../post/PostFeatureItem";
import styled from "styled-components";
import {
  collection,
  limit,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";
import { db } from "../../../firebase-app/firebase-config";
const HomeFeatureStyled = styled.div``;

const HomeFeature = () => {
  const colRef = collection(db, "post");
  const queries = query(
    colRef,
    where("status" === 1),
    where("hot" === true),
    limit(3)
  );
  onSnapshot(queries, (querySnapshot) => {
    console.log(querySnapshot);
  });
  return (
    <HomeFeatureStyled className="home-block">
      <div className="container">
        <Heading className="">Featured posts</Heading>
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
