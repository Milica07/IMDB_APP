import { createSlice } from "@reduxjs/toolkit";

const middlewareActions = {
    getMovies: () => {},
    getMovie: () => {},
    createMovie: () => {},
    getGenres: () => {},
};

const moviesSlice = createSlice({
    name: "movies",
    initialState: {
        movie: null ,
        movies: [],
        totalPages: 1,
        title: null,
        genres: [],
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

        ...middlewareActions
    }
});

export const { getMovies, getMovie, setMovies, setMovie, setTotalPages, setSearchTitle, createMovie,
    setMoviesWithNewMovie, getGenres } = moviesSlice.actions;
export default moviesSlice.reducer;