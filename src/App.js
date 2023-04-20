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
} from "lazy";

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="/about-us" element={<AboutPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/product-list" element={<ProductLists />} />
            <Route path="/product" element={<ProductPage />} />
            <Route path="/my-account" element={<ProfileLayout />}>
              <Route path="profile" element={<MyProfile />} />
              <Route path="address-book" element={<MyAddressBook />} />
              <Route path="myorders" element={<MyOrders />} />
              <Route
                path="myorders/order-details"
                element={<MyOrdersDetails />}
              />
              <Route path="wishlist" element={<MyWishlist />} />
            </Route>
            <Route path="/store-locator" element={<StoreLocatorPage />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
