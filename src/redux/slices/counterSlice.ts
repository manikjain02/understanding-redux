import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};

const counterSlice = createSlice({
  name: "count",
  initialState,
  reducers: {
    addCount: (state, action) => {
      state.count = state.count + action.payload;
    },
    subtractCount: (state, action) => {
      state.count = state.count - action.payload;
    },
  },
});

export const { addCount, subtractCount } = counterSlice.actions;
export { counterSlice };
