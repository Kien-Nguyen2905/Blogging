import React from "react";
import styled from "styled-components";
import PostRelated from "module/post/PostRelated";
import PostMeta from "module/post/PostMeta";
import PostImage from "module/post/PostImage";
import PostCategory from "module/post/PostCategory";
import Layout from "components/layout/Layout";
import AuthorBox from "components/author/AuthorBox";
import { useState } from "react";
import { useEffect } from "react";
import {
  collection,
  where,
  onSnapshot,
  query,
  limit,
} from "firebase/firestore";
import { db } from "firebase-app/firebase-config";
import { orderBy } from "lodash";
const BlogPageStyles = styled.div`
  padding-bottom: 100px;
  .post {
    &-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 40px;
      margin: 40px 0;
    }
    &-feature {
      width: 100%;
      max-width: 640px;
      height: 466px;
      border-radius: 20px;
    }
    &-heading {
      font-weight: bold;
      font-size: 36px;
      margin-bottom: 16px;
    }
    &-info {
      flex: 1;
    }
    &-content {
      max-width: 700px;
      margin: 80px auto;
    }
  }
  .author {
    margin-top: 40px;
    margin-bottom: 80px;
    display: flex;
    border-radius: 20px;
    background-color: ${(props) => props.theme.grayF3};
    &-image {
      width: 200px;
      height: 200px;
      flex-shrink: 0;
      border-radius: inherit;
    }
    &-image img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: inherit;
    }
    &-content {
      flex: 1;
      padding: 20px;
    }
    &-name {
      font-weight: bold;
      margin-bottom: 10px;
      font-size: 20px;
    }
    &-desc {
      font-size: 14px;
      line-height: 2;
    }
  }
  @media screen and (max-width: 1023.98px) {
    padding-bottom: 40px;
    .post {
      &-header {
        flex-direction: column;
      }
      &-feature {
        height: auto;
      }
      &-heading {
        font-size: 26px;
      }
      &-content {
        margin: 40px 0;
      }
    }
    .author {
      flex-direction: column;
      &-image {
        width: 100%;
        height: auto;
      }
    }
  }
`;
const BlogPage = () => {
  const [postInfo, setPostInfo] = useState({});
  useEffect(() => {
    async function fetch() {
      const colRef = collection(db, "posts");
      const q = query(
        colRef,
        where("status", "==", 1),
        where("hot", "==", true),
        orderBy("createdAt", "desc")
      );
      onSnapshot(q, (snapshot) => {
        const results = [];
        snapshot.forEach((doc) => {
          results.push({
            id: doc.id,
            ...doc.data(),
          });
        });
        setPostInfo(results);
      });
    }
    fetch();
  }, []);
  console.log(postInfo);
  if (!postInfo[0]) return;
  const { user } = postInfo[0];
  return (
    <BlogPageStyles>
      <Layout>
        <div className="container">
          <div className="post-header">
            <PostImage
              url={postInfo[0].image}
              className="post-feature"
            ></PostImage>
            <div className="post-info">
              <PostCategory className="mb-6" to={postInfo[0].category?.slug}>
                {postInfo[0].category?.name}
              </PostCategory>
              <h1 className="post-heading">{postInfo[0].title}</h1>
              <PostMeta></PostMeta>
              {/* Check if user role is ADMIN then can edit the post */}
              {/* {userInfo?.role === userRole.ADMIN && (
                <Link
                  to={`/manage/update-post?id=${postInfo.id}`}
                  className="inline-block px-4 py-2 mt-5 text-sm border border-gray-400 rounded-md"
                >
                  Edit post
                </Link>
              )} */}
            </div>
          </div>
          <div className="post-content">
            <div
              className="entry-content"
              // Prevent XSS Attack recommen from React Docs
              dangerouslySetInnerHTML={{
                __html: postInfo.content || "",
              }}
            ></div>
            <AuthorBox userId={user.id}></AuthorBox>
          </div>
          <PostRelated categoryId={postInfo[0]?.category?.id}></PostRelated>
        </div>
      </Layout>
    </BlogPageStyles>
  );
};

export default BlogPage;