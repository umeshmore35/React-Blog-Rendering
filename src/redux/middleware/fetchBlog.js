import axios from "axios";

export const url = "http://localhost:8000/blog/";

const FetchBlog = (store) => (next) => async (action) => {
  try {
    let { data } = await axios.get(url);

    action.playload = {
      blogs: [...data],
    };

    return next(action);
  } catch (e) {
    console.error(e);
    return e;
  }
};

export default FetchBlog;
