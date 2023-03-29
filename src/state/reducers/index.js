import { combineReducers } from "redux";
import { trelloReducer } from "./Reducer";

export const rootReducer = combineReducers({
  trello: trelloReducer,
});
