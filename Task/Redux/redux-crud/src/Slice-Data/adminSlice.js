import { createSlice } from "@reduxjs/toolkit";

export const adminSlice = createSlice({
  name: "AdminDetails",
  initialState: {
    user: [],
    loading: false,
    error: "",
  },
  reducers: {

  }
});

export const {} = adminSlice.actions

export default adminSlice.reducer;
