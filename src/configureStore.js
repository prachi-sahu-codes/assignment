import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from "redux";
import { authReducer } from "./store/authStore/reducer";
import { dataReducer } from "./store/dataStore/reducer";
import { thunk } from "redux-thunk";

const rootReducer = combineReducers({
  auth: authReducer,
  data: dataReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));
export default store;
