import React from "react";
import styled from "styled-components";
const PostImageStyled = styled.div`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 16px;
`;
const PostImage = ({ url, className = "" }) => {
  return (
    <PostImageStyled>
      <img src={url} alt="unsplash" className={`post-image ${className}`} />
    </PostImageStyled>
  );
};

export default PostImage;
