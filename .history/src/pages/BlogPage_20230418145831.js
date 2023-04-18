import Layout from "components/layout/Layout";
import BlogFeature from "module/Blog/BlogFeature";
import BlogMore from "module/Blog/BlogMore";
import { useEffect } from "react";

const BlogPage = () => {
  useEffect(() => {
    document.title = "Monkey Blogging - Add new post";
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
