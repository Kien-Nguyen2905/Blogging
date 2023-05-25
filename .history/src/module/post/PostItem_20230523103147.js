import React from "react";
import styled from "styled-components";
import PostCategory from "./PostCategory";
import PostImage from "./PostImage";
import PostMeta from "./PostMeta";
import PostTitle from "./PostTitle";
const PostItemStyles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  .post {
    &-image {
      height: 202px;
      margin-bottom: 20px;
      display: block;
      width: 266px;
      width: 100%;
      border-radius: 16px;
    }
    &-category {
      margin-bottom: 10px;
    }
    &-title {
      flex: 1;
      margin-bottom: 20px;
    }
    &-meta {
      flex: 1;
      margin-top: auto;
    }
  }
  @media screen and (max-width: 1023.98px) {
    .post {
      &-image {
        aspect-ratio: 16/9;
        height: auto;
      }
    }
  }
`;

const PostItem = ({ data }) => {
  if (!data) return;
  const { category, user } = data;
  if (!data || !data.id) return null;
  const date = data?.createdAt?.seconds
    ? new Date(data?.createdAt?.seconds * 1000)
    : new Date();
  const formatDate = new Date(date).toLocaleDateString("vi-VI");
  return (
    <PostItemStyles>
      <PostImage url={data.image} alt="" to={data.slug}></PostImage>
      <PostCategory>{category.name}</PostCategory>
      <PostTitle to={data.slug}>{data.title}</PostTitle>
      <PostMeta date={formatDate} authorName={user.username}></PostMeta>
    </PostItemStyles>
  );
};

export default PostItem;
