import HomeProductsSlider from "components/Home/HomeProductsSlider/HomeProductsSlider";
import PackageSupport from "components/Home/PackageSupport/PackageSupport";
import DealsProduct from "components/Home/DealsProduct/DealsProduct";
import CategoriesPoster from "components/Home/CategoriesPoster/CategoriesPoster";
import BrowseByCollection from "components/Home/BrowseByCollection/BrowseByCollection";
import ServiceCenter from "components/Home/ServiceCenter/ServiceCenter";
import NarrowSearch from "components/Home/NarrowSearch/NarrowSearch";
import PrefferedProcessor from "components/Home/PrefferedProcessor/PrefferedProcessor";
import MustHaves from "components/Home/MustHaves/MustHaves";
import { useEffect, useState } from "react";
import { homePageApi } from "services/page.service";
import { setHomePageCollection } from "redux/features/homePageSlice";
import { useDispatch } from "react-redux";
import { Loader, scrollToTop } from "utils";
import ProductCollection from "components/Home/ProductCollection/ProductCollection";
import { Helmet } from "react-helmet";
import { setLayoutStatus } from "redux/features/authLayoutSlice";

const HomePage = () => {
  const dispatch = useDispatch();
  const [fetching, setFetching] = useState(false);
  const GetPageData = () => {
    homePageApi().then((response) => {
      if (response) {
        dispatch(setHomePageCollection(response));
        setFetching(false);
      }
    });
  };
  useEffect(() => { 
    GetPageData();
    scrollToTop();
    if(window.location.hash === '#login') {
      dispatch(setLayoutStatus({ status: true, type: 'login' }))
    }
    if(window.location.hash === '#register') {
      dispatch(setLayoutStatus({ status: true, type: 'register' }))
    }
    if(window.location.hash === '#forgot-password') {
      dispatch(setLayoutStatus({ status: true, type: 'forgot_password' }))
    }
  }, []);
  if (fetching) return <Loader />;
  return (
    <div>
      <Helmet>
        <title>Laptop Stores & Service Center in South India - GBS Systems</title>
        <link rel="canonical" href={window.location.href} />
        <meta name="description" content="GBS Systems is one of the leading laptop sale & service center in South India, Having branches in Chennai, Madurai, Trichy, Coimbatore & Bangalore." />
      </Helmet>
      <HomeProductsSlider />
      <DealsProduct />
      <CategoriesPoster />
      <BrowseByCollection />
      <NarrowSearch />
      <ProductCollection />
      <ServiceCenter />
      <PrefferedProcessor />
      <MustHaves />
      <PackageSupport />
    </div>
  );
};

export default HomePage;
