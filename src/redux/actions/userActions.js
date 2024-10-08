// src/redux/actions/userActions.js
import { SET_USER, LOG_OUT } from './actionTypes';

export const setUser = (email) => ({
  type: SET_USER,
  payload: email,
});

export const logOut = () => ({
  type: LOG_OUT,
});
