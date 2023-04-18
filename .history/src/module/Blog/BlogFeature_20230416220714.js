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
  useEffect(() => {
    async function fetchData() {
      const colRef = collection(db, "posts");
      const docData = query(
        colRef,
        where("status", "==", 1),
        where("hot", "==", true),
        orderBy("createdAt", "desc"),
        limit(CATEGORY_PER_PAGE)
      );
      const documentSnapshots = await getDocs(newRef);

      onSnapshot(newRef, (snapshot) => {
        let results = [];
        snapshot.forEach((doc) => {
          results.push({
            id: doc.id,
            ...doc.data(),
          });
        });
        setPostList(results);
      });
      setLastDoc(lastVisible);
    }
    fetchData();
  }, [filter]);
  const HandleLoadMore = async () => {
    const nextRef = query(
      collection(db, "posts"),
      where("status", "==", 1),
      where("hot", "==", true),
      orderBy("createdAt", "desc"),
      startAfter(lastDoc || 0),
      limit(CATEGORY_PER_PAGE)
    );
    onSnapshot(nextRef, (snapshot) => {
      let results = [];
      snapshot.forEach((doc) => {
        results.push({
          id: doc.id,
          ...doc.data(),
        });
      });
      console.log(results);
      setPostList([...postList, ...results]);
    });
    const documentSnapshots = await getDocs(nextRef);
    const lastVisible =
      documentSnapshots.docs[documentSnapshots.docs.length - 1];
    setLastDoc(lastVisible);
  };
  if (postList.length <= 0) return null;
  return (
    <>
      <div className="container">
        <Heading>Featured posts</Heading>
        <div className="grid-layout">
          {postList.map((post) => (
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
