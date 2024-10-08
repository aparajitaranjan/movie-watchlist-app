// src/redux/reducers/userReducer.js
import { SET_USER, LOG_OUT } from '../actions/actionTypes';

const initialState = {
  email: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return { ...state, email: action.payload };
    case LOG_OUT:
      return { ...state, email: null };
    default:
      return state;
  }
};

export default userReducer;
