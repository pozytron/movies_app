export const QUOTE_FETCHING = "fetchingQuote";
export const QUOTE_FETCHED = "quoteFetched";
export const QUOTE_ERROR = "quoteError";
export const ADD_FAV = "addFav";

export const startFetching = () => ({type: QUOTE_FETCHING});

export const quoteFetched = (payload) => ({type: QUOTE_FETCHED, payload});
export const quoteError = (payload) => ({type: QUOTE_ERROR, payload});

export const addFav = (payload) => ({type: ADD_FAV, payload});
export const fetchQuote = () => (dispatch) => {
  dispatch(startFetching());

//   return api.fetchQuote()
//     .then((quote) => dispatch(quoteFetched(quote)))
//     .catch(error => dispatch(quoteError(error)));
};
