import HomeProductsSlider from "components/Home/HomeProductsSlider/HomeProductsSlider";
import PackageSupport from "components/Home/PackageSupport/PackageSupport";
import DealsProduct from "components/Home/DealsProduct/DealsProduct";
import CategoriesPoster from "components/Home/CategoriesPoster/CategoriesPoster";
import BrowseByCollection from "components/Home/BrowseByCollection/BrowseByCollection";
import ServiceCenter from "components/Home/ServiceCenter/ServiceCenter";
import NarrowSearch from "components/Home/NarrowSearch/NarrowSearch";
import PerfectStudents from "components/Home/PerfectStudents/PerfectStudents";
import PrefferedProcessor from "components/Home/PrefferedProcessor/PrefferedProcessor";
import GamersLaptop from "components/Home/GamersLaptop/GamersLaptop";
import Tablets from "components/Home/Tablets/Tablets";
import Combos from "components/Home/Combos/Combos";
import MustHaves from "components/Home/MustHaves/MustHaves";
import { useEffect } from "react";
import { homePageApi } from "services/page.service";
import { setHomePageCollection } from "redux/features/homePageSlice";
import { useDispatch } from "react-redux";
import ProductCollection from "components/Home/ProductCollection/ProductCollection";
const HomePage = () => {
  const dispatch = useDispatch()
  const GetPageData = () => {
    homePageApi().then((response) => {
      if(response) dispatch(setHomePageCollection(response))
    })
  }
  useEffect(() => {
    GetPageData()
  }, []);
  return (
    <div>
      <HomeProductsSlider />
      <DealsProduct />
      <CategoriesPoster />
      <BrowseByCollection />
      <ProductCollection />
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
