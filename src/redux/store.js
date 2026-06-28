import {
  combineReducers,
  configureStore,
  createAction,
} from "@reduxjs/toolkit";
import appReducer from "./slices/appSlice";
import suggestionReducer from "./slices/searchSuggestionSlice";
import videosList from "./slices/videoListSlice";
export const resetAction = createAction("RESET_ACTION");

const combineReducer = combineReducers({
  app: appReducer,
  search: suggestionReducer,
  video: videosList,
});
const callbackAction = (state, action) => {
  if (action.type === resetAction?.type) {
    state = undefined;
  }
  return combineReducer(state, action);
};

const store = configureStore({
  reducer: callbackAction,
});

export default store;
