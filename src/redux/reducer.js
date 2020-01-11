import { combineReducers } from "redux";
import {QUOTE_FETCHING, QUOTE_FETCHED, QUOTE_ERROR, ADD_FAV} from "./actions";

const initialState = {
  loading: false,
  error: "",
  quote: null
};

const quote = (state = initialState, { type, payload }) => {
  if (type === QUOTE_FETCHING) {
    return {
      ...state,
      quote: "",
      loading: true,
    }
  }

  if (type === QUOTE_FETCHED) {
    return {
      loading: false,
      error: "",
      quote: payload
    }
  }

  if (type === QUOTE_ERROR) {
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
  quote,
  favourites
});
