export default function userReducer(action, state = null) {
  // console.debug(state);
  switch (action.type) {
    case "LOGIN":
      if (action.payload) {
        const data = atob(action.payload.split(".")[1]);
        localStorage.setItem("user", data);
        localStorage.setItem("token", action.payload);
      }
      return action.payload;
    case "LOGOUT":
      localStorage.clear();
      return null;
    default:
      return state;
  }
}
