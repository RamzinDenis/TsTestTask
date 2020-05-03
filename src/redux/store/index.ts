import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import reducer from "../reducers";

const enhancer = applyMiddleware(thunk);

const store = createStore(reducer, composeWithDevTools(enhancer));

export default store;
