import Heading from "components/layout/Heading";
import PostItem from "module/post/PostItem";
import PostNewestItem from "module/post/PostNewestItem";
import PostNewestLarge from "module/post/PostNewestLarge";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { db } from "firebase-app/firebase-config";
import {
  collection,
  limit,
  onSnapshot,
  query,
  where,
  orderBy,
} from "firebase/firestore";
const HomeNewestStyles = styled.div`
  .layout {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    grid-gap: 40px;
    margin-bottom: 40px;
    align-items: start;
  }
  .sidebar {
    padding: 28px 20px;
    background-color: #f3edff;
    border-radius: 16px;
  }
  @media screen and (max-width: 1023.98px) {
    .layout {
      grid-template-columns: 100%;
    }
    .sidebar {
      padding: 14px 10px;
    }
  }
`;
const BlogMore = ({ children }) => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const colRef = collection(db, "posts");
    const queries = query(
      colRef,
      where("status", "==", 1),
      where("hot", "==", false),
      orderBy("createdAt", "desc")
    );
    onSnapshot(queries, (snapshot) => {
      const results = [];
      snapshot.forEach((doc) => {
        results.push({
          id: doc.id,
          ...doc.data(),
        });
      });
      setPosts(results);
    });
  }, []);
  const [first, ...rest] = posts;
  const [item1, item2, item3, ...item] = rest;
  return (
    <HomeNewestStyles className="home-block">
      <div className="container">
        <Heading>{children}</Heading>
        <div className="layout">
          <PostNewestLarge data={first}></PostNewestLarge>
          <div className="sidebar">
            <PostNewestItem data={item1}></PostNewestItem>
            <PostNewestItem data={item2}></PostNewestItem>
            <PostNewestItem data={item3}></PostNewestItem>
          </div>
        </div>
        <div className="grid-layout grid-layout--primary">
          {item.length > 0 &&
            item
              .slice(0, 4)
              .map((post) => <PostItem key={post.id} data={post}></PostItem>)}
        </div>
      </div>
    </HomeNewestStyles>
  );
};

export default BlogMore;
