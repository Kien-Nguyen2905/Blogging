import React from "react";
import slugify from "slugify";
import styled from "styled-components";
import PostCategory from "./PostCategory";
import PostImage from "./PostImage";
import PostMeta from "./PostMeta";
import PostTitle from "./PostTitle";
const PostNewestLargeStyles = styled.div`
  .post {
    &-image {
      display: block;
      margin-bottom: 20px;
      height: 433px;
      border-radius: 16px;
    }
    &-category {
      margin-bottom: 10px;
    }
    &-title {
      margin-bottom: 20px;
    }
    @media screen and (max-width: 1023.98px) {
      &-image {
        height: 250px;
      }
    }
  }
`;

const PostNewestLarge = ({ data }) => {
  if (!data || !data.id) return null;
  const { category, user } = data;
  const date = data?.createdAt?.seconds
    ? new Date(data?.createdAt?.seconds * 1000)
    : new Date();
  const formatDate = new Date(date).toLocaleDateString("vi-VI");
  return (
    <PostNewestLargeStyles>
      <PostImage to={data.slug} url={data.image} alt=""></PostImage>
      <PostCategory>{category.name}</PostCategory>
      <PostTitle size="big">{data.title}</PostTitle>
      <PostMeta
        to={slugify(data.slug)}
        authorName={user?.fullname}
        date={formatDate}
      ></PostMeta>
    </PostNewestLargeStyles>
  );
};

export default PostNewestLarge;
