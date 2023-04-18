import React from "react";
import styled from "styled-components";
const PostCategoryStyled = styled.div``;
const PostCategory = ({ children }) => {
  return <PostCategoryStyled>{children}</PostCategoryStyled>;
};

export default PostCategory;
