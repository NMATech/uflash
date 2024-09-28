import { ACTIONS } from "../action/ACTIONS";

export const AppCategory = (state, action) => {
  switch (action.type) {
    case ACTIONS.ADD:
      return [...state, action.payload];

    case ACTIONS.UPDATE:
      const updateCategory = action.payload;

      const updatedCategory = state.map((data) => {
        if (data.title === updateCategory.title) {
          return updatedCategory;
        }
        return data;
      });

      return [...state, updatedCategory];
      
    case ACTIONS.DELETE:
      return [
        () => {
          state.filter((data) => data.title !== action.payload);
        },
      ];

    default:
      return state;
  }
};
