import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CartPage, HomePage, ProductLists } from "pages";
import Layout from "layouts/layout/Layout";

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