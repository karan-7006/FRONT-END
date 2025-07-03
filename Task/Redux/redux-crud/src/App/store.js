import { configureStore } from "@reduxjs/toolkit";
import  userSlice  from "../Slice-Data/userSlice";
import  adminSlice  from "../Slice-Data/adminSlice";



export const store = configureStore({
    reducer:{
        users: userSlice,
        admins: adminSlice
    }

})