import axios from "axios";

export const url = "http://localhost:8000/blog/";
// export const url = "https://blog-express-back.herokuapp.com/blog/";
const FetchBlog = (store) => (next) => async (action) => {
  try {
    let { data } = await axios.get(url);
    if (data) {
      action.playload = {
        blogs: [...data],
      };
    }

    return next(action);
  } catch (e) {
    console.error(e);
    return e;
  }
};

export default FetchBlog;
