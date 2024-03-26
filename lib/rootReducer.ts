import { combineReducers } from '@reduxjs/toolkit';
import campaignReducer from "./campaign/campaignReducer";

const rootReducer = combineReducers({
  campaign: campaignReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
