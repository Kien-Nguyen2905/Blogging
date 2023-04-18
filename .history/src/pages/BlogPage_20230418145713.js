import Layout from "components/layout/Layout";
import BlogFeature from "module/Blog/BlogFeature";
import BlogMore from "module/Blog/BlogMore";

const BlogPage = () => {
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
