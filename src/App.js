import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import CartPage from "pages/CartPage";
import Layout from "layouts/layout/Layout";
import ProductLists from "components/ProductsLists";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/product-list" element={<ProductLists />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
