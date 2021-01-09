const logger = (store) => (next) => (action) => {
  console.log("middleware");
  action.text = "hello";
  return next(action);
};

export default logger;
