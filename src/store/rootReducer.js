import { combineReducers } from "redux";
import charactersReducer from './characters/reducer';
import episodesReducer from './episodes/reducer';
import locationsReducer from './locations/reducer';

const rootReducer = combineReducers({
  charactersReducer,
  episodesReducer,
  locationsReducer
});

export default rootReducer;
