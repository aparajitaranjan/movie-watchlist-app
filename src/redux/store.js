import { createStore, combineReducers } from 'redux';
import userReducer from './reducers/userReducer';
import watchlistReducer from './reducers/watchlistReducer';

const rootReducer = combineReducers({
  user: userReducer,
  watchlist: watchlistReducer,
});

const store = createStore(rootReducer);

export default store;
