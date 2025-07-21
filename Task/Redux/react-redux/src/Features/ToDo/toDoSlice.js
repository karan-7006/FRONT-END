import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [
    { id: 1, text: "Ansh" },
    { id: 2, text: "Dhwanit" },
  ],
};

export const toDoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addtodo: (state, action) => {
      state.todos.push(action.payload);
    },
    updatetodo: (state, action) => {
      const { id, newText } = action.payload;
      const todo = state.todos.find((todo) => todo.id === id);
      if (todo) {
        todo.text = newText;
      }
    },
    deletetodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const {} = toDoSlice.actions;
export default toDoSlice.reducer;
