import { createSlice } from "@reduxjs/toolkit";

const middlewareActions = {
    getMovies: () => {},
    getMovie: () => {},
    createMovie: () => {},
    getGenres: () => {},
    getRelatedMovies: () => {},
    likeMovie: () => {},
    dislikeMovie: () => {},
};

const moviesSlice = createSlice({
    name: "movies",
    initialState: {
        movie: null ,
        movies: [],
        totalPages: 1,
        title: null,
        genres: [],
        related: [],
},
    reducers: {
        setMovies: (state, action) => {
            state.movies = action.payload;
        },
        setMovie: (state, action) => {
            state.movie = action.payload;
        },
        setTotalPages: (state, action) => {
            state.totalPages = action.payload;
        },
        setSearchTitle(state, action){
            state.title = action.payload;
        },
        setMoviesWithNewMovie(state, action){
            state.movies = [...state.movies, action.payload];
        },
        setRelatedMovies(state, action){
            state.related = action.payload;
        },
        updateMovie(state, action){
          state.movies = [...state.movies, action.payload];
        },
        ...middlewareActions
    }
});

export const { getMovies, getMovie, setMovies, setMovie, setTotalPages, setSearchTitle, createMovie,
    setMoviesWithNewMovie, getGenres, setRelatedMovies, getRelatedMovies, 
    likeMovie, dislikeMovie, updateMovie,
    } = moviesSlice.actions;
export default moviesSlice.reducer;