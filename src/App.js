import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import CartPage from "pages/CartPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cartPage" element={<CartPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
