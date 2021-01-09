import axios from "axios";
import { blogActionType } from "../constant/blogAction.type";
import { url } from "../middleware/fetchBlog";

const blogIDActionGentretor = (actionType, playload = {}) => {
  switch (actionType) {
    case blogActionType.THUNK:
      return async (dispatch) => {
        try {
          let { data } = await axios.get(`${url}/${playload.id}`);
          console.log(data);
          return dispatch({
            playload: {
              blog: "hello",
            },
            type: blogActionType.THUNK,
          });
        } catch (e) {
          console.log(e);
          return e;
        }
      };

    default:
      return {
        type: "invalid input",
      };
  }
};

export default blogIDActionGentretor;
