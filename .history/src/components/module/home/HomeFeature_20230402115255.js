import Heading from "../../layout/Heading";

import PostFeatureItem from "../post/PostFeatureItem";

import styled from "styled-components";
const HomeFeatureStyled = styled.div``;

const HomeFeature = () => {
  return (
    <HomeFeatureStyled className="home-block">
      <div className="container">
        <Heading>Featured posts</Heading>
        <div className="grid-layout">
          {posts.map((post) => (
            <PostFeatureItem key={post.id} data={post}></PostFeatureItem>
          ))}
        </div>
      </div>
    </HomeFeatureStyled>
  );
};
// Example of error boundary
export default withErrorBoundary(HomeFeature, {
  FallbackComponent: (
    <p className="p-3 text-red-500 bg-red-100">
      Look like this component error
    </p>
  ),
});
