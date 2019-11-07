import authReducer from "store/reducers/auth";
import userReducer from "store/reducers/user";

const reducer = (state, action) => {
  console.debug(state, action);
  let { auth, user } = state;

  return {
    auth: authReducer(action, auth),
    user: userReducer(action, user)
  };
};

export default reducer;
