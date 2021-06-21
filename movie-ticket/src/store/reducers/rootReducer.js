import { combineReducers } from "redux";
import { movieReducer } from "./movieReducer";

export const RootReducer = combineReducers({
  movie: movieReducer,
});
