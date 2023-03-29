import React from "react";
import HomeProductsSlider from "components/Home/HomeProductsSlider/HomeProductsSlider";
import PackageSupport from "components/Home/PackageSupport/PackageSupport";
import DealsProduct from "components/Home/DealsProduct/DealsProduct";
import CategoriesPoster from "components/Home/CategoriesPoster/CategoriesPoster";
import BrowseByPrice from "components/Home/BrowseByPrice/BrowseByPrice";
import ServiceCenter from "components/Home/ServiceCenter/ServiceCenter";
import NewArrivals from "components/Home/NewArrivals/NewArrivals";
import NarrowSearch from "components/Home/NarrowSearch/NarrowSearch";
import PerfectStudents from "components/Home/PerfectStudents/PerfectStudents";
import PrefferedProcessor from "components/Home/PrefferedProcessor/PrefferedProcessor";
import GamersLaptop from "components/Home/GamersLaptop/GamersLaptop";
import Tablets from "components/Home/Tablets/Tablets";
import Combos from "components/Home/Combos/Combos";
import MustHaves from "components/Home/MustHaves/MustHaves";

const HomePage = () => {
  return (
    <div>
      <HomeProductsSlider />
      <DealsProduct />
      <CategoriesPoster />
      <BrowseByPrice />
      <NewArrivals />
      <ServiceCenter />
      <NarrowSearch />
      <PerfectStudents />
      <PrefferedProcessor />
      <GamersLaptop />
      <Tablets />
      <Combos />
      <MustHaves />
      <PackageSupport />
    </div>
  );
};

export default HomePage;
