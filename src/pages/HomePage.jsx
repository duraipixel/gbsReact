import React from "react";
import Header from "../layouts/Header/Header";
import HomeProductsSlider from "components/Home/HomeProductsSlider/HomeProductsSlider";
import PackageSupport from "components/Home/PackageSupport/PackageSupport";
import Footer from "layouts/Footer/Footer";
import DealsProduct from "components/Home/DealsProduct/DealsProduct";
import CategoriesPoster from "components/Home/CategoriesPoster/CategoriesPoster";
import BrowseByPrice from "components/Home/BrowseByPrice/BrowseByPrice";
import ServiceCenter from "components/Home/ServiceCenter/ServiceCenter";
import NewArrivals from "components/Home/NewArrivals/NewArrivals";
import NarrowSearch from "components/Home/NarrowSearch/NarrowSearch";
import PerfectStudents from "components/Home/PerfectStudents/PerfectStudents";

const HomePage = () => {
  return (
    <div>
      <Header />
      <HomeProductsSlider />
      <DealsProduct />
      <CategoriesPoster />
      <BrowseByPrice />
      <NewArrivals />
      <ServiceCenter />
      <NarrowSearch />
      <PerfectStudents />
      <PackageSupport />
      <Footer />
    </div>
  );
};

export default HomePage;
