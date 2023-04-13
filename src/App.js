import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import { Loader } from "utils";

const Layout        = lazy(() => import("layouts/layout/Layout"))
const ProfileLayout = lazy(() => import("layouts/layout/ProfileLayout"))
const HomePage      = lazy(() => import("pages/HomePage"))
const CartPage      = lazy(() => import("pages/CartPage"))
const ProductLists  = lazy(() => import("pages/ProductLists"))
const StorePage     = lazy(() => import("pages/StorePage"))
const AboutPage     = lazy(() => import("pages/AboutPage"))
const MyAddressBook = lazy(() => import("components/MyAccount/MyAddressBook/MyAddressBook"))
const MyOrders      = lazy(() => import("components/MyAccount/MyOrders/MyOrder"))
const MyProfile     = lazy(() => import("components/MyAccount/MyProfile/MyProfile"))
const MyWishlist    = lazy(() => import("components/MyAccount/MyWishlist/MyWishlist"))

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
              <Route path="/stores" element={<StorePage />} />
              <Route path="/about-us" element={<AboutPage />} />
              <Route path="my-account" element={<ProfileLayout />}>
                <Route path="profile" element={<MyProfile />} />
                <Route path="accountbook" element={<MyAddressBook />} />
                <Route path="myorders" element={<MyOrders />} />
                <Route path="wishlist" element={<MyWishlist />} />
              </Route>
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
