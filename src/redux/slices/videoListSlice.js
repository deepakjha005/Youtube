import { createSlice } from "@reduxjs/toolkit";

const videoListSlice = createSlice({
  name: "videoList",
  initialState: {
    videoList: null,
    suggestionList: null,
  },
  reducers: {
    setVideoList: (state, action) => {
      state.videoList = action.payload;
    },
    setSuggestionVideoList: (state, action) => {
      state.suggestionList = action.payload;
    },
  },
});
export default videoListSlice.reducer;
export const { setVideoList, setSuggestionVideoList } = videoListSlice.actions;
