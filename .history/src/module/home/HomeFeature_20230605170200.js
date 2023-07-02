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
            <div className="my-6 flex w-full flex-col items-center gap-y-5 lg:mx-auto lg:max-w-[1150px] lg:flex-row">
              <Skeleton className="h-64 w-full flex-shrink-0 rounded-lg object-cover max-sm:h-52 max-[320px]:h-44 md:w-2/3 md:pr-5 lg:w-[500px]" />

              <div className="flex flex-col items-start justify-center w-full gap-y-5 md:w-2/3 md:px-5">
                <Skeleton className="w-full h-5 rounded-lg" />
                <Skeleton className="w-2/3 h-5 rounded-lg" />
                <Skeleton className="w-2/3 h-5 rounded-lg" />
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
