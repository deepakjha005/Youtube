import { createSlice } from "@reduxjs/toolkit";
import { fetchLiveChat } from "../thunk/fetchLiveChatThunk";

const liveChatSlice = createSlice({
  name: "liveChat",
  initialState: {
    loading: false,
    error: null,
    liveChatResponse: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchLiveChat.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchLiveChat.fulfilled, (state, action) => {
      state.loading = false;
      state.liveChatResponse = action.payload;
    });
    builder.addCase(fetchLiveChat.rejected, (state, { payload }) => {
      state.loading = false;
      state.error = payload || "something went wroong";
    });
  },
});

export default liveChatSlice.reducer;
