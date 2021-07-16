import { combineReducers } from "redux";
import { carouselReducer } from "./carousel.reducer";
import { movieReducer } from "./movie.reducer";
import { newsReducer } from "./news.reducer";
import { userReducer } from "./user.reducer";

export const RootReducer = combineReducers({
  movie: movieReducer,
  carousel: carouselReducer,
  news: newsReducer,
  user: userReducer,
});
