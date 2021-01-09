import { blogActionType } from "../constant/blogAction.type";

const blogActionGentretor = (actionType, playload = {}) => {
  switch (actionType) {
    case blogActionType.GET:
      return {
        type: blogActionType.GET,
        playload: { ...playload },
      };

    default:
      return {
        type: "invalid input",
      };
  }
};

export default blogActionGentretor;
