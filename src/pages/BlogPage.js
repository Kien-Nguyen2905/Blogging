import Layout from "components/layout/Layout";
import Loading from "components/loadingpage/Loading";
import BlogFeature from "module/Blog/BlogFeature";
import BlogMore from "module/Blog/BlogMore";
import { useEffect, useState } from "react";

const BlogPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    document.title = "Blog";
  }, []);
  if (isLoading) return <Loading></Loading>;
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
