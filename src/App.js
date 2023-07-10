import "./App.scss";
import "animate.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Suspense } from "react";
import { Loader, strRandom } from "utils";
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
  ComparePage,
  StoreLocationDetailsPage,
  PaymentSuccess,
  TermsConditions,
  VerifyPayment,
  PaymentFaild
} from "lazy"; 
import PageComponent from "components/PageComponent";
import ServicesListingComponent from "components/ServicesListingComponent";

function App() {
  if (localStorage.getItem('guest_token') === null) {
    localStorage.setItem('guest_token', strRandom())
  }
  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="/compare" element={<ComparePage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/products" element={<ProductLists />} />
            <Route path="/products/:slug" element={<ProductPage />} />
            <Route path="/about-us" element={<AboutPage />} />
            <Route path="/shipping-delivery" element={<ShippingDeliveryPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="/warantty-policy" element={<WaranttyPolicyPage />} />
            <Route path="/contact-us" element={<ContactUsPage />} />
            <Route path="/my-account" element={<ProfileLayout />}>
              <Route path="profile" element={<MyProfile />} />
              <Route path="address-book" element={<MyAddressBook />} />
              <Route path="myorders" element={<MyOrders />} />
              <Route path="myorders/:order_id" element={<MyOrdersDetails />} />
              <Route path="wishlist" element={<MyWishlist />} />
            </Route>
            <Route path="/store-locator-for-sales" element={<ServicesListingComponent />} />
            <Route path="/store-locator-for-service" element={<ServicesListingComponent  />} />
            <Route path="/verify-account/:token" element={<VerifyAccount />} />
            <Route path="/reset-password/:token" element={<ResetPassword />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/payment-success" element={<PaymentSuccess />} />
            <Route path="/payment-faild" element={<PaymentFaild />} />

            <Route path="/verify-payment/:token" element={<VerifyPayment />} />
            <Route path="/terms-conditions" element={<TermsConditions />} />
            <Route path=":page_slug" element={<PageComponent/>} />
          </Route>
          {/* <Route path="/stores" element={<StorePage />} /> */}
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;