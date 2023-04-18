import Heading from "components/layout/Heading";
import { db } from "firebase-app/firebase-config";
import {
  collection,
  onSnapshot,
  query,
  where,
  orderBy,
  limit,
  startAfter,
  getDocs,
} from "firebase/firestore";
import PostFeatureItem from "module/post/PostFeatureItem";
import { Button } from "components/button";
import React, { useEffect, useState } from "react";
const CATEGORY_PER_PAGE = 3;
const BlogFeature = () => {
  const [postList, setPostList] = useState([]);
  const [filter, setFilter] = useState("");
  const [lastDoc, setLastDoc] = useState();
  const [limited, setLimited] = useState(3);
  useEffect(() => {
    async function fetchData() {
      const colRef = collection(db, "posts");
      const q = query(
        colRef,
        where("status", "==", 1),
        where("hot", "==", true),
        orderBy("createdAt", "desc"),
        limit(CATEGORY_PER_PAGE)
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
