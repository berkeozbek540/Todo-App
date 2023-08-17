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
        completed: false,
      });
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
      console.log(newItem.name);
      existingItem.name = action.payload.name;
    },
  },
});

export const todoSliceActions = todoSlice.actions;

export default todoSlice;
