import React from "react";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
const PostImageStyles = styled.div`
  &-overlay {
    position: absolute;
    inset: 0;
    border-radius: 16px;
    background-color: rgba(0, 0, 0, 0.75);
    mix-blend-mode: multiply;
    opacity: 0.6;
  }
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
      <Link to={`/${to}`}>
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

export default PostImage;
