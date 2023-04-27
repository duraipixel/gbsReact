import App from "./App";
import { Provider } from "react-redux";
import { store } from "redux/store/store";
import { createRoot } from 'react-dom/client';

createRoot(document.getElementById('root')).render(
    <Provider store={store}>
      <App />
    </Provider>
);