import Layout from "components/layout/Layout";
import Loading from "components/loadingpage/Loading";
import HomeBanner from "module/home/HomeBanner";
import HomeFeature from "module/home/HomeFeature";
import HomeNewest from "module/home/HomeNewest";
import React, { Fragment, useEffect } from "react";
import { useState } from "react";
const HomePage = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    document.title = "Home";
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);
  if (isLoading) return <Loading></Loading>;
  return (
    <Fragment>
      <Layout>
        <HomeBanner></HomeBanner>
        <HomeFeature></HomeFeature>
        <HomeNewest></HomeNewest>
      </Layout>
    </Fragment>
  );
};

export default HomePage;
