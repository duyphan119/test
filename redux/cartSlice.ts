import { createSlice } from "@reduxjs/toolkit";

const catsSlice = createSlice({
  name: "cats",
  initialState: {
    log: "",
  },
  reducers: {
    logCats: (state, action) => {
      console.log("first");
      state.log = action.payload;
    },
  },
});
export const { logCats } = catsSlice.actions;

export default catsSlice.reducer;
