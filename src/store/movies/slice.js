import { createSlice } from "@reduxjs/toolkit";

const middlewareActions = {
    getMovies: () => {},
    getMovie: () => {},
    createMovie: () => {},
    getGenres: () => {},
    getRelatedMovies: () => {},
    likeMovie: () => {},
    dislikeMovie: () => {},
    getPopular: () => {},
    postComment: () => {},
    getComments: () => {},
    getWatchList: () => {},
    addRemoveWatchList: () => {},
    watchListAddRemove: () => {},
    updateWatched: () => {},
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
        popular: [],
        comments: [],
        commentsCount: 0,
        watchList: [],
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
        setPopular(state, action){
            state.popular = action.payload;
        },
        setComments(state, action){
            state.comments = action.payload;
        },
        addComment(state, action){
            state.comments = [...state.comments, action.payload];
        },
        setWatchList(state, action){
            state.watchList = action.payload;
        },
        setCommentsCount(state, action){
            state.commentsCount = action.payload;
        },
        ...middlewareActions
    }
});

export const { getMovies, getMovie, setMovies, setMovie, setTotalPages, setSearchTitle, createMovie,
    setMoviesWithNewMovie, getGenres, setRelatedMovies, getRelatedMovies, 
    likeMovie, dislikeMovie, updateMovie,
    getPopular, setPopular,
    addComment, setComments, postComment, getComments,
    getWatchList, setWatchList, addRemoveWatchList, watchListAddRemove, updateWatched, setCommentsCount
    } = moviesSlice.actions;
export default moviesSlice.reducer;