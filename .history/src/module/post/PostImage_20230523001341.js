import Skeleton from "module/skeleton/Skeleton";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
const PostImageStyles = styled.div`
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: inherit;
  }
`;
const PostImage = ({ className = "", url = "", alt = "", to = "" }) => {
  if (to)
    return (
      <Link to={`/${to}`} style={{ display: "block" }}>
        <PostImageStyles className={`post-image ${className}`}>
          <img src={url} alt={alt} loading="lazy" />
        </PostImageStyles>
      </Link>
    );
  else
    return (
      <PostImageStyles className={`post-image ${className}`}>
        <img src={url} alt={alt} loading="lazy" />
      </PostImageStyles>
    );
};
const Loading = () => {
  return <Skeleton className="w-full h-full border rounded-2xl"></Skeleton>;
};
PostImage.Loading = Loading;
export default PostImage;
