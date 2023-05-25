import React from "react";
import styled, { css } from "styled-components";
import Skeleton from "module/skeleton/Skeleton";
const PostCategoryStyles = styled.div`
  display: inline-block;
  padding: 4px 10px;
  border-radius: 10px;
  color: ${(props) => props.theme.gray6B};
  font-size: 14px;
  font-weight: 600;
  white-space: nowrap;
  a {
    display: block;
  }
  ${(props) =>
    props.type === "primary" &&
    css`
      background-color: ${(props) => props.theme.grayF3};
    `};
  ${(props) =>
    props.type === "secondary" &&
    css`
      background-color: white;
    `};
  @media screen and (max-width: 1023.98px) {
    font-size: 10px;
  }
`;

const PostCategory = ({
  children,
  type = "primary",
  className = "",
  to = "/",
}) => {
  return (
    <PostCategoryStyles type={type} className={`post-category ${className}`}>
      {children}
    </PostCategoryStyles>
  );
};

const Loading = () => {
  return <Skeleton className="w-[54px] h-[29px] border rounded-2xl"></Skeleton>;
};
PostCategory.Loading = Loading;
export default PostCategory;
