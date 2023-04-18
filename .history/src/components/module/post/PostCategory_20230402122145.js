import React from "react";
import styled from "styled-components";
const PostCategoryStyled = styled.div`
  display: inline-block;
  padding: 8px 12px;
  border-radius: 8px;
  color: #6b6b6b;
  font-size: 14px;
  font-weight: 600;
  white-space: nowrap;
  background-color: #f3f3f3;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100px;
`;
const PostCategory = ({ children, type = "primary" }) => {
  return <PostCategoryStyled type={type}>{children}</PostCategoryStyled>;
};

export default PostCategory;
