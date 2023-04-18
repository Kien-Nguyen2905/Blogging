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
import { useEffect } from "react";
const HomeFeatureStyled = styled.div``;

const HomeFeature = () => {
  useEffect(() => {
    const colRef = collection(db, "post");
    const queries = query(
      colRef,
      where("status", "==", 1),
      where("hot", "==", true),
      limit(4)
    );
    onSnapshot(queries, (querySnapshot) => {
      querySnapshot.forEach((item) => {
        console.log(item.data());
      });
    });
  }, []);
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
