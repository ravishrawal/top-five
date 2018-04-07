import { combineReducers } from 'redux';
import {
SET_TOKEN,
} from './actions';

const tokenReducer = (state={}, action) => {
  switch(action.type) {
    case SET_TOKEN:
      return action.payload;
    default:
      return state;
  };
};

export default combineReducers({
  token: tokenReducer,
});