import Layout from "components/layout/Layout";
import PostRelated from "module/post/PostRelated";
import HomeFeature from "module/home/HomeFeature";
import HomeNewest from "module/home/HomeNewest";
import React from "react";

const BlogPage = () => {
  return (
    <>
      <Layout>
        <HomeFeature></HomeFeature>
        <HomeNewest></HomeNewest>
        <PostRelated></PostRelated>
      </Layout>
    </>
  );
};

export default BlogPage;
