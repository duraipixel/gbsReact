import "./App.scss"; 
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { lazy } from "react";
// Code Splitting
const HomePage     = lazy(()=> import("pages/HomePage"))
const CartPage     = lazy(()=> import("pages/CartPage"))
const ProductLists = lazy(()=> import("pages/ProductLists"))
const Layout       = lazy(()=> import("layouts/layout/Layout"))

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