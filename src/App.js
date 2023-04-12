import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CartPage, HomePage, ProductLists, StorePage } from "pages";
import Layout from "layouts/layout/Layout";
import MyProfile from "components/MyAccount/MyProfile/MyProfile";

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
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
