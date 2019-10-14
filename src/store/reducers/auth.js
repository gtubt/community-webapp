export default function authReducer(action, state = false) {
  // console.debug(state);
  switch (action.type) {
    case "LOGIN":
      return true;
    case "LOGOUT":
      return false;
    default:
      return state;
  }
}
