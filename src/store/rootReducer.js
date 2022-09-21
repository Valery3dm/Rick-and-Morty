import { combineReducers } from "redux";
import charactersReducer from './characters/reducer';
import episodesReducer from './episodes/reducer';

const rootReducer = combineReducers({
  charactersReducer,
  episodesReducer
});

export default rootReducer;
