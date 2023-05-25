import React from "react";
import styled from "styled-components";
import Skeleton from "module/skeleton/Skeleton";
const PostMetaStyles = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 14px;
  font-weight: 600;
  color: inherit;
  .post {
    &-dot {
      display: inline-block;
      width: 4px;
      height: 4px;
      background-color: currentColor;
      border-radius: 100rem;
    }
  }
  @media screen and (max-width: 1023.98px) {
    font-size: 10px;
    gap: 6px;
  }
`;
const PostMeta = ({
  date = "Mar 23",
  authorName = "Andiez Le",
  className = "",
}) => {
  return (
    <PostMetaStyles className={`post-meta ${className}`}>
      <span className="post-time">{date}</span>
      <span className="post-dot"></span>
      <span className="post-author">{authorName}</span>
    </PostMetaStyles>
  );
};
const Loading = () => {
  return <Skeleton className="w-[54px] h-[29px] border rounded-2xl"></Skeleton>;
};
PostMeta.Loading = Loading;
export default PostMeta;
