export default (state = [], action) => {
  switch (action.type) {
    case "FETCH_INTERESTS":
      return action.payload;
    default:
      return state;
  }
};
