import styled from "styled-components";
import React, { useState, useEffect } from "react";
import PostTitle from "./PostTitle";
import PostMeta from "./PostMeta";
import PostImage from "./PostImage";
import PostCategory from "./PostCategory";
import { Skeleton } from "components/skeleton";
const PostFeatureItemStyles = styled.div`
  width: 100%;
  border-radius: 16px;
  position: relative;
  height: 169px;
  .post {
    &-image {
      width: 100%;
      height: 100%;
      border-radius: 16px;
    }
    &-overlay {
      position: absolute;
      inset: 0;
      border-radius: 16px;
      background-color: rgba(0, 0, 0, 0.75);
      mix-blend-mode: multiply;
      opacity: 0.6;
    }
    &-content {
      position: absolute;
      inset: 0;
      z-index: 10;
      padding: 20px;
      color: white;
    }
    &-top {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 16px;
    }
  }

  @media screen and (min-width: 1024px) {
    height: 272px;
  }
  @media screen and (max-width: 1023.98px) {
    .post {
      &-content {
        padding: 15px;
      }
    }
  }
`;
const PostFeatureItem = ({ data }) => {
  const { category, user } = data;
  if (!data || !data.id) return null;
  const date = data?.createdAt?.seconds
    ? new Date(data?.createdAt?.seconds * 1000)
    : new Date();
  const formatDate = new Date(date).toLocaleDateString("vi-VI");
  return (
    <>
      <PostFeatureItemStyles>
        <PostImage url={data.image} alt="unsplash"></PostImage>
        <div className="post-overlay"></div>
        <div className="post-content">
          <div className="post-top">
            {category?.name && <PostCategory>{category?.name}</PostCategory>}
            <PostMeta authorName={user?.username} date={formatDate}></PostMeta>
          </div>
          <PostTitle to={data.slug} size="big">
            {data.title}
          </PostTitle>
        </div>
      </PostFeatureItemStyles>
      {!data && (
        <>
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
    </>
  );
};
export default PostFeatureItem;
