import "./App.scss";
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
  StorePage,
  MyOrdersDetails,
} from "lazy";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<HomePage />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/product-list" element={<ProductLists />} />
              <Route path="/product" element={<ProductPage />} />
              <Route path="/stores" element={<StorePage />} />
              <Route path="/about-us" element={<AboutPage />} />
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
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
