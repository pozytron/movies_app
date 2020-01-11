export const MOVIES_FETCHING = "MOVIES_FETCHING";
export const MOVIES_FETCHED = "MOVIES_FETCHED";
export const MOVIES_ERROR = "MOVIES_ERROR";
export const ADD_FAV = "ADD_FAV";

export const startMoviesFetching = () => ({type: QUOTE_FETCHING});

export const moviesFetched = (payload) => ({type: QUOTE_FETCHED, payload});
export const moviesError = (payload) => ({type: QUOTE_ERROR, payload});

export const addFav = (payload) => ({type: ADD_FAV, payload});

export const fetchMovies = () => (dispatch) => {
  dispatch(startFetching());

  fetch('http://www.omdbapi.com/?apikey=23d54dda&t=matrix').then(
    resp => resp.json() // this returns a promise
  ).then(resp => {
    
      console.log(resp);
    
  }).catch(ex => {
    console.error(ex);
  })
    // key: 23d54dda
    

//   return api.fetchQuote()
//     .then((quote) => dispatch(quoteFetched(quote)))
//     .catch(error => dispatch(quoteError(error)));
};
