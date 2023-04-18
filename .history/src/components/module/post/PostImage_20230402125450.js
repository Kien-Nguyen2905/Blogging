import React from "react";
import styled from "styled-components";
const PostImageStyled = styled.div`
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: inherit;
  }
`;
const PostImage = ({ url, className = "" }) => {
  return (
    <PostImageStyled className={`post-image ${className}`}>
      <img src={url} alt="unsplash" />
    </PostImageStyled>
  );
};

export default PostImage;
