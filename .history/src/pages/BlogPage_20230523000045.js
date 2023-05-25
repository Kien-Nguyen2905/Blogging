import Layout from "components/layout/Layout";
import BlogFeature from "module/blog/BlogFeature";
import BlogMore from "module/blog/BlogMore";
import { useEffect } from "react";

const BlogPage = () => {
  useEffect(() => {
    document.title = "Blog";
  }, []);
  return (
    <>
      <Layout>
        <BlogFeature></BlogFeature>
        <BlogMore>Newest update</BlogMore>
      </Layout>
    </>
  );
};

export default BlogPage;
