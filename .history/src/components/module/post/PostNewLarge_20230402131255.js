import React from "react";
import styled from "styled-components";
import PostImage from "./PostImage";
import PostCatetory from "./PostCategory";
import PostTitle from "./PostTitle";
import PostMeta from "./PostMeta";
const PostNewestLargeStyles = styled.div`
  .post {
    &-image {
      display: block;
      margin-bottom: 16px;
      height: 433px;
      border-radius: 16px;
    }
    &-category {
      margin-bottom: 16px;
    }
    &-meta {
      margin-top: 10px;
    }
  }
`;

const PostNewestLarge = () => {
  return (
    <PostNewestLargeStyles>
      <PostImage
        url={
          "https://images.unsplash.com/photo-1510519138101-570d1dca3d66?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2294&q=80"
        }
      ></PostImage>
      <PostCatetory>Kiến thức</PostCatetory>
      <PostTitle size="big">
        Hướng dẫn setup phòng cực chill dành cho người mới toàn tập
      </PostTitle>
      <PostMeta></PostMeta>
    </PostNewestLargeStyles>
  );
};

export default PostNewestLarge;
