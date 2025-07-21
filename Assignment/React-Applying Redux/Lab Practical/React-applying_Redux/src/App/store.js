import { configureStore } from "@reduxjs/toolkit";
import  countSlice  from "../Features/Counter/countSlice";
import  userSlice  from "../Slice-Data/userSlice";

export const store = configureStore({
    reducer: {
        counter : countSlice,
        users : userSlice
    }
})