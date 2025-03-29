import { configureStore, createSelector } from "@reduxjs/toolkit";
import { counterSlice } from "./slices/counterSlice";

const store = configureStore({
  reducer: { countSlice: counterSlice.reducer },
});

export const getCountSelector = createSelector(
  (state) => state?.countSlice,
  (state) => state
);

export { store };
