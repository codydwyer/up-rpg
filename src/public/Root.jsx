import React from "react";
import { Provider } from "react-redux";
import configureStore from "./configureStore";

export default ({ children, initialState }) => (
  <Provider store={configureStore(initialState)}>{children}</Provider>
);
