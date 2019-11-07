export default function postReducer(action, state = null) {
  // console.debug(state);
  switch (action.type) {
    case "POST":
      if (action.payload) {
        localStorage.setItem("posts", JSON.stringify(action.payload));
      }
      return action.payload;
    case "LOGOUT":
      return null;
    default:
      return state;
  }
}
