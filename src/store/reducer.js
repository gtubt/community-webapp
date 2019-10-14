import authReducer from "./reducers/auth";
import userReducer from "./reducers/user";

const reducer = (state, action) => {
  console.debug(state, action);
  let { auth, user } = state;

  return {
    auth: authReducer(action, auth),
    user: userReducer(action, user)
  };
};

export default reducer;
