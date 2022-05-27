import { createSlice } from "@reduxjs/toolkit";

const middlewareActions = {
    getMovies: () => {},
    getMovie: () => {},
};

const moviesSlice = createSlice({
    name: "movies",
    initialState: {
        movie: null ,
        movies: [],
},
    reducers: {
        setMovies: (state, action) => {
            state.movies = action.payload;
        },
        setMoive: (state, action) => {
            state.movie = action.payload;
        },

        ...middlewareActions
    }
});

export const { getMovies, getMovie, setMovies, setMovie } = moviesSlice.actions;
export default moviesSlice.reducer;