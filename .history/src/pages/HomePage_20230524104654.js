import Layout from "components/layout/Layout";
import HomeBanner from "module/home/HomeBanner";
import HomeFeature from "module/home/HomeFeature";
import HomeNewest from "module/home/HomeNewest";
import React, { Fragment, useEffect } from "react";
const HomePage = () => {
  useEffect(() => {
    document.title = "Home";
  }, []);
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
