import { combineReducers } from "redux";
import blogReducer from "./blog.reducer";

const rootReducer = combineReducers({
  blogReducer: blogReducer,
});

export default rootReducer;
