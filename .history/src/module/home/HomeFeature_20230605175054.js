import Heading from "components/layout/Heading";
import { Skeleton } from "components/skeleton";
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
  return (
    <div className="home-block">
      <div className="container">
        <Heading>Featured posts</Heading>
        <div className="grid-layout">
          {!isLoading && (
            <>
              <div className="w-full rounded-2xl h-[272px] bg-slate-500 opacity-30">
                <div className="flex p-[20px] justify-between">
                  <Skeleton className="w-[52px] h-[29px] rounded-lg"></Skeleton>
                  <Skeleton className="w-[172px] h-[29px] rounded-lg"></Skeleton>
                </div>
                <div className="flex p-[20px] gap-6 flex-col">
                  <Skeleton className="w-full h-[80px] rounded-lg"></Skeleton>
                </div>
              </div>
              <div className="w-full rounded-2xl h-[272px]">
                <div className="flex p-[20px] justify-between">
                  <Skeleton className="w-[52px] h-[29px] rounded-lg"></Skeleton>
                  <Skeleton className="w-[172px] h-[29px] rounded-lg"></Skeleton>
                </div>
                <div className="flex p-[20px] gap-6 flex-col">
                  <Skeleton className="w-full h-[80px] rounded-lg"></Skeleton>
                </div>
              </div>
              <div className="w-full rounded-2xl h-[272px]">
                <div className="flex p-[20px] justify-between">
                  <Skeleton className="w-[52px] h-[29px] rounded-lg"></Skeleton>
                  <Skeleton className="w-[172px] h-[29px] rounded-lg"></Skeleton>
                </div>
                <div className="flex p-[20px] gap-6 flex-col">
                  <Skeleton className="w-full h-[80px] rounded-lg"></Skeleton>
                </div>
              </div>
            </>
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
