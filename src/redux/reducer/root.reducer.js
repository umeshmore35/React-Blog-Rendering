import { combineReducers } from "redux";
import blogReducer from "./blog.reducer";

const rootReducer = combineReducers({
  blogReducer,
});

export default rootReducer;
