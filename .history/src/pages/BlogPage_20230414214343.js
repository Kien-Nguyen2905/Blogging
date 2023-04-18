import Layout from "components/layout/Layout";
import PostRelated from "module/post/PostRelated";
import HomeFeature from "module/home/HomeFeature";
import HomeNewest from "module/home/HomeNewest";
import { db } from "firebase-app/firebase-config";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { useAuth } from "contexts/auth-context";
import React, { useEffect, useState } from "react";

const BlogPage = () => {
  const { userInfo } = useAuth();
  const [postInfo, setPostInfo] = useState({});
  return (
    <>
      <Layout>
        <HomeFeature></HomeFeature>
        <HomeNewest></HomeNewest>
        <PostRelated>More</PostRelated>
      </Layout>
    </>
  );
};

export default BlogPage;
