import Layout from "components/layout/Layout";
import HomeFeature from "module/home/HomeFeature";
import HomeNewest from "module/home/HomeNewest";

const BlogPage = () => {
  return (
    <>
      <Layout>
        <HomeFeature limited={3}></HomeFeature>
        <HomeNewest></HomeNewest>
      </Layout>
    </>
  );
};

export default BlogPage;