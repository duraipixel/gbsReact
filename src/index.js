import App from "./App";
import { StrictMode } from "react";
import { Provider } from "react-redux";
import { store } from "redux/store/store";
import { createRoot } from 'react-dom/client';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);