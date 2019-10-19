export default (state = false, action) => {
  switch (action.type) {
    case "SWITCH_TOOGLE_MENU":
      return !state;
    default:
      return state;
  }
};
