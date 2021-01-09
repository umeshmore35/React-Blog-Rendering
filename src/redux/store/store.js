import FetchBlog from "../middleware/fetchBlog";

import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reducer/root.reducer";
import thunk from "redux-thunk";

const store = createStore(rootReducer, applyMiddleware(FetchBlog, thunk));

export default store;
