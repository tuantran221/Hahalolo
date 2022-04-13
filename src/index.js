import React from "react";
import ReactDOM from "react-dom";
import "./sass/index.scss";
import App from "./App";
import { SnackbarProvider } from "notistack";
import { Provider } from "react-redux";

import configureStore from "./configureStore";

const store = configureStore();
// Setup the middleware to watch between the Reducers and the Actions

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <SnackbarProvider
        maxSnack={2}
        autoHideDuration={500}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        className="rendererror"
      >
        <App />
      </SnackbarProvider>
    </Provider>
  </React.StrictMode>,

  document.getElementById("root")
);
