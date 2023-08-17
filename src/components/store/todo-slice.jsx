import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    items: [],
  },
  reducers: {
    addTodo(state, action) {
      const newTodo = action.payload;
      state.items.push({
        id: newTodo.id,
        name: newTodo.todo,
      });
    },
    removeTodo(state, action) {
      const id = action.payload;
      state.items = state.items.filter((item) => item.id !== id);
    },
  },
});

export const todoSliceActions = todoSlice.actions;

export default todoSlice;
