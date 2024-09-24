import { useReducer } from "react";
import { ACTIONS } from "../action/ACTIONS";

const useFlashcard = () => {
  const [flashcard, dispatch] = useReducer(reducerflashcard, [
    {
      category: "Food",
      question: "Bab",
      answer: "Nasi",
    },
    {
      category: "Car",
      question: "Mercedes",
      answer: "Black",
    },
  ]);
  return { flashcard, dispatch };
};

const reducerflashcard = (flashcard, action) => {
  switch (action.type) {
    case ACTIONS.ADD:
      return [...flashcard, action.payload];
  }
};

export default useFlashcard;
