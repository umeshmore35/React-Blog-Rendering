import { blogActionType } from "../constant/blogAction.type";

const intialState = {
  blogs: [],
};

const blogReducer = (state = intialState, action) => {
  switch (action.type) {
    case blogActionType.GET:
      return {
        ...state,
        blogs: [...state.blogs, ...action.playload.blogs],
      };

    default:
      return {
        ...state,
      };
  }
};

export default blogReducer;
