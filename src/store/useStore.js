import React, { createContext, useReducer, useContext } from "react";

import reducer from "./reducer";

let auth = false;
let user = null;

// Check login token
if (localStorage.getItem("token")) {
  auth = true;
  user = JSON.parse(localStorage.getItem("user"));
}

const initialState = {
  auth,
  user
};

export const StoreContext = createContext(initialState);

export const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return <StoreContext.Provider value={{ state, dispatch }}>{children}</StoreContext.Provider>;
};

export const useStore = () => {
  const { state, dispatch } = useContext(StoreContext);
  return { state, dispatch };
};
