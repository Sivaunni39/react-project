import React from "react";
import { Provider } from "react-redux";
import AppRoutes from "./components/AppRoutes";
import Context from "./components/Context";
import store from "./store/store";
function App() {
  return (
    <Provider store={store}>
      <Context>
        <AppRoutes />
      </Context>
    </Provider>
  );
}

export default App;
