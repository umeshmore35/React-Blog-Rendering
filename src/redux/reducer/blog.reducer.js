import { blogActionType } from "../constant/blogAction.type";

const intialState = {
  blogs: [],
  blog: {},
};

const blogReducer = (state = intialState, action) => {
  switch (action.type) {
    case blogActionType.GET:
      return {
        ...state,
        blogs: [...state.blogs, ...action.playload.blogs],
      };

    case blogActionType.THUNK:
      return {
        ...state,
        blog: { ...state.blog, ...action.play.blog },
      };

    default:
      return {
        ...state,
      };
  }
};

export default blogReducer;
