import React from "react";
import styled from "styled-components";
import PostImage from "./PostImage";
const PostItemStyles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  .post {
    &-image {
      height: 202px;
      margin-bottom: 20px;
      display: block;
    }
    &-category {
      margin-bottom: 16px;
    }
    &-info {
      display: flex;
      align-items: center;
      gap: 12px;
      font-size: 14px;
      font-weight: 600;
      color: #6b6b6b;
      margin-top: auto;
    }
    &-title {
      font-weight: bold;
      line-height: 1.5;
      display: block;
      font-size: 18px;
      margin-bottom: 8px;
    }
  }
`;

const PostItem = () => {
  return (
    <PostItemStyles>
      <PostImage url="https://images.unsplash.com/photo-1570993492881-25240ce854f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2290&q=80"></PostImage>
      <div className="post-category">Kiến thức</div>
      <h3 className="post-title">
        Hướng dẫn setup phòng cực chill dành cho người mới toàn tập
      </h3>
      <div className="post-info">
        <span className="post-time">Mar 23</span>
        <span className="post-dot"></span>
        <span className="post-author">Andiez Le</span>
      </div>
    </PostItemStyles>
  );
};

export default PostItem;
