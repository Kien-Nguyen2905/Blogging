import Layout from "components/layout/Layout";
import BlogFeature from "module/Blog/BlogFeature";
import HomeFeature from "module/home/HomeFeature";
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
