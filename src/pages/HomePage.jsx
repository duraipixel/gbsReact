import React from "react";
import Header from "../layouts/Header/Header";
import HomeProductsSlider from "components/Home/HomeProductsSlider/HomeProductsSlider";
import PackageSupport from "components/Home/PackageSupport/PackageSupport";
import Footer from "layouts/Footer/Footer";
const HomePage = () => {
  return (
    <div>
      <Header />
      <HomeProductsSlider />
      <PackageSupport />
      <Footer />
    </div>
  );
};

export default HomePage;
