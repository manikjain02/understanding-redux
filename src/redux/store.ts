import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "./slices/counterSlice";

const store = configureStore({
  reducer: { countSlice: counterSlice.reducer },
});

export { store };
