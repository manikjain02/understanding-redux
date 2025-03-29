import { configureStore, createSelector } from "@reduxjs/toolkit";
import { counterSlice } from "./slices/counterSlice";
import { todoSlice } from "./slices/todoSlice";

const store = configureStore({
  reducer: { countSlice: counterSlice.reducer, todo: todoSlice.reducer },
});

export const getCountSelector = createSelector(
  (state) => state?.countSlice,
  (state) => state
);

export { store };
