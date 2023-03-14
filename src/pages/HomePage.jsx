import React from "react";
import Header from "../layouts/Header/Header";
import HomeProductsSlider from "components/Home/HomeProductsSlider/HomeProductsSlider";
import PackageSupport from "components/Home/PackageSupport/PackageSupport"
const HomePage = () => {
  return (
    <div>
      <Header />
      <HomeProductsSlider />
      <PackageSupport />
    </div>
  );
};

export default HomePage;
