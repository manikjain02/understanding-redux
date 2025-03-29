import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { TTodo } from "../../constants/TodoType";

interface IInitialState {
  isLoading: boolean;
  isError: boolean;
  data: Promise<TTodo[] | null>;
}

const initialState: IInitialState = {
  isLoading: false,
  isError: false,
  data: null,
};
export const fetchTodos = createAsyncThunk("fetchTodos", async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  return response.json();
});
const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchTodos.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchTodos.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchTodos.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
    });
  },
});

export { todoSlice };
