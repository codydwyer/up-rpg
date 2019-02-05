import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import allReducers from "./reducers";


const configureStore = (initialState = {}) => {
  const middlewares = [thunk];

  return createStore(
    allReducers,
    initialState,
    applyMiddleware(...middlewares)
  );
};

export default configureStore;