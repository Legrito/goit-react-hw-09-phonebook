import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import authActions from './auth-actions';

const initialState = { name: null, email: null};

const user = createReducer(initialState, {
    [authActions.registerSuccess]: (_, {payload}) => payload.user,
    [authActions.loginSuccess]: (_, {payload}) => payload.user,
    [authActions.logoutSuccess]: () => initialState,
    [authActions.getCurrentUserRequestSuccess]: (_, {payload}) => payload,
});

const token = createReducer(null, {
    [authActions.registerSuccess]: (_, {payload}) => payload.token,
    [authActions.loginSuccess]: (_, {payload}) => payload.token,
    [authActions.logoutSuccess]: () => null,
});

const error = createReducer(null, {
    [authActions.registerSuccess]: () => null,
    [authActions.registerError]: (_, {payload}) => payload,
    [authActions.loginError]: (_, {payload}) => payload,
    [authActions.logoutError]: (_, {payload}) => payload,
    [authActions.getCurrentUserRequestError]: (_, {payload}) => payload,
});

const isAthenticated = createReducer(false, {
  [authActions.registerSuccess]: () => true,
  [authActions.loginSuccess]: () => true,
  [authActions.getCurrentUserRequestSuccess]: () => true,
  [authActions.registerError]: () => false,
  [authActions.loginError]: () => false,
  [authActions.getCurrentUserRequestError]: () => false,
  [authActions.logoutSuccess]: () => false,
});

export default combineReducers({
    user,
    token,
    error,
    isAthenticated,
})