import FetchBlog from "../middleware/fetchBlog";

const { createStore, applyMiddleware } = require("redux");
const { rootReducer } = require("../reducer/root.reducer");

const store = createStore(rootReducer, applyMiddleware(FetchBlog));

export default store;
