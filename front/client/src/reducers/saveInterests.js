export default (state = [], action) => {
  switch (action.type) {
    case "SAVE_INTERESTS":
      return action.payload;
    default:
      return state;
  }
};
