import axios from "axios";
import { blogActionType } from "../constant/blogAction.type";
import { url } from "../middleware/fetchBlog";

const blogActionGentretor = (actionType, playload = {}) => {
  switch (actionType) {
    case blogActionType.GET:
      console.log("hello");
      return {
        type: blogActionType.GET,
        playload: { ...playload },
      };

    case blogActionType.THUNK:
      return async (dispatch, getstate) => {
        try {
          let { data } = await axios.get(`${url}/${playload.id}`);

          dispatch({
            type: blogActionType.THUNK,
            play: {
              blog: { ...data },
            },
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

export default blogActionGentretor;
