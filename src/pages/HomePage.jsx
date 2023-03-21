import React from "react";
import Header from "../layouts/Header/Header";
import HomeProductsSlider from "components/Home/HomeProductsSlider/HomeProductsSlider";
import PackageSupport from "components/Home/PackageSupport/PackageSupport";
import Footer from "layouts/Footer/Footer";
import DealsProduct from "components/Home/DealsProduct/DealsProduct";
import CategoriesPoster from "components/Home/CategoriesPoster/CategoriesPoster";
import BrowseByPrice from "components/Home/BrowseByPrice/BrowseByPrice";
import ServiceCenter from "components/Home/ServiceCenter/ServiceCenter";

const HomePage = () => {
  return (
    <div>
      <Header />
      <HomeProductsSlider />
      <DealsProduct />
      <CategoriesPoster />
      <BrowseByPrice />
      <ServiceCenter />
      <PackageSupport />
      <Footer />
    </div>
  );
};

export default HomePage;
