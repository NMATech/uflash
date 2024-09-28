import { createContext, useReducer } from "react";

import { AppCategory } from "./AppCategory";
import { ACTIONS } from "../action/ACTIONS";

const initialState = ["Food", "Car"];

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [category, dispatch] = useReducer(AppCategory, initialState);

  const addCategory = (category) => {
    dispatch({
      type: ACTIONS.ADD,
      payload: category,
    });
  };

  const editCategory = (title) => {
    dispatch({
      type: ACTIONS.UPDATE,
      payload: title,
    });
  };

  const deleteCategory = (title) => {
    dispatch({
      type: ACTIONS.DELETE,
      payload: title,
    });
  };

  return (
    <GlobalContext.Provider
      value={{ category, addCategory, editCategory, deleteCategory }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
