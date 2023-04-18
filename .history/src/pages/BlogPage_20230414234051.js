import Layout from "components/layout/Layout";
import BlogFeature from "module/Blog/BlogFeature";
import BlogMore from "module/Blog/BlogMore";

const BlogPage = () => {
  return (
    <>
      <Layout>
        <BlogFeature></BlogFeature>
        <BlogMore></BlogMore>
      </Layout>
    </>
  );
};

export default BlogPage;
