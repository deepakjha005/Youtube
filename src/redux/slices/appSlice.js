import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "appSlice",
  initialState: {
    showHamburger: true,
  },
  reducers: {
    toggleHamburger: (state) => {
      state.showHamburger = !state.showHamburger;
    },
  },
});
export default appSlice.reducer;
export const { toggleHamburger } = appSlice.actions;
