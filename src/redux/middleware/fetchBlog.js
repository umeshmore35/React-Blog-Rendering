import axios from "axios";

const url = "http://localhost:8000/blog/";

const FetchBlog = (store) => (next) => async (action) => {
  let { data } = await axios.get(url);
  action.playload = {
    blogs: [...data],
  };
  console.log(data);
  return next(action);
};

export default FetchBlog;
