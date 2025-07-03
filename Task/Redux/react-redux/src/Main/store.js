import { configureStore } from "@reduxjs/toolkit";
import  countSlice  from "../Features/Counter/countSlice";
import  toDoSlice  from "../Features/ToDo/toDoSlice";

export const store = configureStore({
    reducer: {
        counter : countSlice,
        todos: toDoSlice
    }
})