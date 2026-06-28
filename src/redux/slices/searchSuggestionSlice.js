import { createSlice } from "@reduxjs/toolkit";

const searchSuggestionSlice = createSlice({
  name: "searchSuggestionSlice",
  initialState: {},
  reducers: {
    searchCacheResults: (state, action) => {
      state = Object.assign(state, action.payload);
    },
  },
});
export default searchSuggestionSlice.reducer;
export const { searchCacheResults } = searchSuggestionSlice.actions;
