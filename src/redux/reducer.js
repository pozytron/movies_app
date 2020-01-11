import { combineReducers } from "redux";
import {MOVIES_FETCHING, MOVIES_FETCHED, MOVIES_ERROR, ADD_FAV} from "./actions";

const initialState = {
  loading: false,
  error: "",
  movies: null
};

const movies = (state = initialState, { type, payload }) => {
  if (type === MOVIES_FETCHING) {
    return {
      ...state,
      movies: null,
      loading: true,
    }
  }

  if (type === MOVIES_FETCHED) {
    return {
      loading: false,
      error: "",
      movies: payload
    }
  }

  if (type === MOVIES_ERROR) {
    return {
      ...state,
      loading: false,
      error: payload,
    }
  }

  return state;
};

const favourites = (state = [], action) => {
  if (action.type === ADD_FAV) {
    return [...state, action.payload];
  }

  return state;
};

export default combineReducers({
  movies,
  favourites
});
