export const MOVIES_FETCHING = "MOVIES_FETCHING";
export const MOVIES_FETCHED = "MOVIES_FETCHED";
export const MOVIES_ERROR = "MOVIES_ERROR";
export const ADD_FAV = "ADD_FAV";

export const startMoviesFetching = () => ({type: MOVIES_FETCHING});

export const moviesFetched = (payload) => ({type: MOVIES_FETCHED, payload});
export const moviesError = (payload) => ({type: MOVIES_ERROR, payload});

export const addFav = (payload) => ({type: ADD_FAV, payload});

export const fetchMovies = () => (dispatch) => {
  dispatch(startMoviesFetching());

  return fetch('http://www.omdbapi.com/?apikey=23d54dda&s=matrix').then(
    resp => resp.json() // this returns a promise
  ).then(resp => {
      console.log(resp);
      dispatch(moviesFetched(resp))
    
  }).catch(ex => {
    console.error(ex);
    dispatch(moviesError(ex))
  })
};
