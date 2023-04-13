import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CartPage, HomePage, ProductLists, StorePage, AboutPage } from "pages";
import Layout from "layouts/layout/Layout";
import {
  MyAddressBook,
  MyOrders,
  MyProfile,
  MyWishlist,
} from "components/MyAccount";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/product-list" element={<ProductLists />} />
            <Route path="/stores" element={<StorePage />} />
            <Route path="/myAccount/profile" element={<MyProfile />} />
            <Route path="/myAccount/accountbook" element={<MyAddressBook />} />
            <Route path="/myAccount/myorders" element={<MyOrders />} />
            <Route path="/myAccount/wishlist" element={<MyWishlist />} />
            <Route path="/about-us" element={<AboutPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
