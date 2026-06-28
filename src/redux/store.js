import {
  combineReducers,
  configureStore,
  createAction,
} from "@reduxjs/toolkit";
import appReducer from "./slices/appSlice";
import liveChatsReducer from "./slices/liveChatSlice";
import suggestionReducer from "./slices/searchSuggestionSlice";
import videosList from "./slices/videoListSlice";
export const resetAction = createAction("RESET_ACTION");

const combineReducer = combineReducers({
  app: appReducer,
  search: suggestionReducer,
  video: videosList,
  liveChat: liveChatsReducer,
});
const callbackAction = (state, action) => {
  if (action.type === resetAction?.type) {
    state = undefined;
  }
  return combineReducer(state, action);
};
const loggerMiddleware = () => (next) => (action) => {
  console.log("Dispatching:", action.type);
  return next(action);
};

const store = configureStore({
  reducer: callbackAction,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(loggerMiddleware),
});

export default store;
