import "./App.scss";
import "animate.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Suspense } from "react";
import { Loader } from "utils";
import {
  AboutPage,
  CartPage,
  HomePage,
  Layout,
  MyAddressBook,
  MyOrders,
  MyProfile,
  MyWishlist,
  NotFound,
  ProductPage,
  ProductLists,
  ProfileLayout,
  StoreLocatorPage,
  MyOrdersDetails,
  ShippingDeliveryPage,
  PrivacyPolicyPage,
  WaranttyPolicyPage,
  ContactUsPage, 
  ServiceCenterLocator,
  ServiceCenterDetails,
  VerifyAccount,
  ResetPassword,
  ComparePage
} from "lazy";

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="/about-us" element={<AboutPage />} />
            <Route path="/compare" element={<ComparePage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/product-list" element={<ProductLists />} />
            <Route path="/product-list/:slug" element={<ProductPage />} />
            <Route path="/about-us" element={<AboutPage />} />
            <Route path="/shipping-delivery" element={<ShippingDeliveryPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="/warantty-policy" element={<WaranttyPolicyPage />} />
            <Route path="/contact-us" element={<ContactUsPage />} />
            <Route path="/my-account" element={<ProfileLayout />}>
              <Route path="profile" element={<MyProfile />} />
              <Route path="address-book" element={<MyAddressBook />} />
              <Route path="myorders" element={<MyOrders />} />
              <Route path="myorders/order-details" element={<MyOrdersDetails />}/>
              <Route path="wishlist" element={<MyWishlist />} />
            </Route>
            <Route path="/store-locator" element={<StoreLocatorPage />} />
            <Route path="/service-center-locator" element={<ServiceCenterLocator />} />
            <Route path="/service-center-details" element={<ServiceCenterDetails />} />
            <Route path="/verify-account/:token" element={<VerifyAccount />} />
            <Route path="/reset-password/:token" element={<ResetPassword />} />
            <Route path="*" element={<NotFound />} />
          </Route>
          {/* <Route path="/stores" element={<StorePage />} /> */}
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;