import Heading from "components/layout/Heading";
import { db } from "firebase-app/firebase-config";
import {
  collection,
  limit,
  onSnapshot,
  query,
  where,
  orderBy,
} from "firebase/firestore";
import PostFeatureItem from "module/post/PostFeatureItem";
import React, { useEffect, useState } from "react";
const HomeFeature = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const colRef = collection(db, "posts");
    const queries = query(
      colRef,
      where("status", "==", 1),
      where("hot", "==", true),
      orderBy("createdAt", "desc"),
      limit(3)
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
      setIsLoading(false);
    });
  }, []);
  console.log(isLoading);
  return (
    <div className="home-block">
      <div className="container">
        <Heading>Featured posts</Heading>
        <div className="grid-layout">
          {!isLoading && (
            <div className="p-4 space-y-5 rounded-2xl bg-white/5">
              <div className="h-24 rounded-lg bg-rose-100/10"></div>
              <div className="space-y-3">
                <div className="w-3/5 h-3 rounded-lg bg-rose-100/10"></div>
                <div className="w-4/5 h-3 rounded-lg bg-rose-100/20"></div>
                <div className="w-2/5 h-3 rounded-lg bg-rose-100/20"></div>
              </div>
            </div>
          )}
          {posts.map((post) => (
            <PostFeatureItem key={post.id} data={post}></PostFeatureItem>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeFeature;
