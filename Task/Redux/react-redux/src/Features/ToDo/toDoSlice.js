import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todos: ["Ansh", "Dhwanit"]
}

export const toDoSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        addtodo : (state, action)=> {
            state.todos.push(action.payload);
        }
    }
})

export const {} = toDoSlice.actions;
export default toDoSlice.reducer;