import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import {
  homeSearchReducer,
  stateDataReducer,
  tripReducer,
  userReducer,
} from "./reducers";
import { composeWithDevTools } from "redux-devtools-extension";

const reducers = combineReducers({
  homeSearchReducer,
  tripReducer,
  stateDataReducer,
  userReducer,
});

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
