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
        totalPages: 1,
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

        ...middlewareActions
    }
});

export const { getMovies, getMovie, setMovies, setMovie, setTotalPages } = moviesSlice.actions;
export default moviesSlice.reducer;