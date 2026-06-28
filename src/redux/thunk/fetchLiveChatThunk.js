import { createAsyncThunk } from "@reduxjs/toolkit";
import { YOU_TUBE_LIVE_CHAT_API } from "../../utils.js/constants";

export const fetchLiveChat = createAsyncThunk("liveChat", async () => {
  try {
    const data = await fetch(YOU_TUBE_LIVE_CHAT_API);
    const json = await data.json();
    console.log(json);
    return json?.items;
  } catch (error) {
    console.log(error, "error returns");
    return error;
  }
});
