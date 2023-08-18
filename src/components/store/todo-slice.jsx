import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    items: [],
    filter: "",
  },
  reducers: {
    addTodo(state, action) {
      const newTodo = action.payload;
      state.items.push({
        id: newTodo.id,
        name: newTodo.todo,
        completed: false,
      });
      state.filter = "";
    },
    removeTodo(state, action) {
      const id = action.payload;
      state.items = state.items.filter((item) => item.id !== id);
    },
    completeTodo(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      existingItem.completed = !existingItem.completed;
    },
    editTodo(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      existingItem.name = action.payload.name;
    },
    searchTodo(state, action) {
      state.filter = action.payload;
    },
  },
});

export const todoSliceActions = todoSlice.actions;

export default todoSlice;
