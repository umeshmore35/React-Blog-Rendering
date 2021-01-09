import FetchBlog from "../middleware/fetchBlog";

import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reducer/root.reducer";

const store = createStore(rootReducer, applyMiddleware(FetchBlog));

export default store;
