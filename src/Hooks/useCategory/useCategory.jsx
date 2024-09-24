import { useReducer } from "react";
import { ACTIONS } from "../action/ACTIONS";

const useCategory = () => {
  const [category, dispatch] = useReducer(reducerCategory, ["Food", "Car"]);
  return { category, dispatch };
};

const reducerCategory = (category, action) => {
  switch (action.type) {
    case ACTIONS.ADD:
      return [...category, action.payload];
  }
};

export default useCategory;
