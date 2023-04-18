import Heading from "components/layout/Heading";
import { db } from "firebase-app/firebase-config";
import {
  collection,
  onSnapshot,
  query,
  where,
  orderBy,
  limit,
} from "firebase/firestore";
import PostFeatureItem from "module/post/PostFeatureItem";
import { Button } from "components/button";
import React, { useEffect, useState } from "react";
const CATEGORY_PER_PAGE = 3;
const BlogFeature = () => {
  const [postList, setPostList] = useState([]);
  const [limited, setLimited] = useState(CATEGORY_PER_PAGE);
  useEffect(() => {
    async function fetchData() {
      const colRef = collection(db, "posts");
      const q = query(
        colRef,
        where("status", "==", 1),
        where("hot", "==", true),
        orderBy("createdAt", "desc")
      );
      onSnapshot(q, (snapshot) => {
        let results = [];
        snapshot.forEach((doc) => {
          results.push({
            id: doc.id,
            ...doc.data(),
          });
        });
        setPostList(results);
      });
    }
    fetchData();
  }, []);
  const HandleLoadMore = () => {
    setLimited(() => limited + 3);
  };
  console.log(postList);
  if (postList.length <= 0) return null;
  return (
    <>
      <div className="container">
        <Heading>Featured posts</Heading>
        <div className="grid-layout">
          {postList.slice(0, limited).map((post) => (
            <PostFeatureItem key={post.id} data={post}></PostFeatureItem>
          ))}
        </div>
        <Button className="mx-auto my-5" onClick={HandleLoadMore}>
          Load More
        </Button>
      </div>
    </>
  );
};

export default BlogFeature;
