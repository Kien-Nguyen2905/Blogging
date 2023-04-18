import React from "react";
import styled{css} from "styled-components";
const PostCategoryStyled = styled.div`
  display: inline-block;
  padding: 8px 12px;
  border-radius: 8px;
  color: ${(props) => props.gray6B};
  font-size: 14px;
  font-weight: 600;
  white-space: nowrap;
  background-color: #f3f3f3;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100px;
  ${props => props.type === "primary" && css`
  background-color: ${props => props.grayF3};;
  `};
`;
const PostCategory = ({ children, type = "primary", className = " " }) => {
  return (
    <PostCategoryStyled type={type} className={className}>
      {children}
    </PostCategoryStyled>
  );
};

export default PostCategory;
