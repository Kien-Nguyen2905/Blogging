import Layout from "components/layout/Layout";
import BlogFeature from "module/Blog/BlogFeature";
import HomeNewest from "module/home/HomeNewest";

const BlogPage = () => {
  return (
    <>
      <Layout>
        <BlogFeature></BlogFeature>
        <HomeNewest></HomeNewest>
      </Layout>
    </>
  );
};

export default BlogPage;
