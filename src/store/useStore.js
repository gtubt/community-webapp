import React, { createContext, useReducer, useContext } from "react";

import reducer from "./reducer";

const initialState = {
  auth: false,
  user: null
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
