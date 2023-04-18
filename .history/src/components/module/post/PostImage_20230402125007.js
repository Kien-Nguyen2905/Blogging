import React from "react";
import styled from "styled-components";
const PostImageStyled = styled.div``;
const PostImage = () => {
  return (
    <PostImageStyled>
      <img
        src="https://images.unsplash.com/photo-1614624532983-4ce03382d63d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2662&q=80"
        alt="unsplash"
        className="post-image"
      />
    </PostImageStyled>
  );
};

export default PostImage;
