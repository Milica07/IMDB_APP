import { put, call, takeLatest } from "redux-saga/effects";
import { getMovies, getMovie, setMovies, setMovie, setTotalPages, setSearchTitle,
    createMovie, setMoviesWithNewMovie } from "./slice";
import movieService from "../../services/MovieService";
import { history } from "../../history";

function* handleGetMovies(action){
    try{
        const movies = yield call(movieService.getMovies, action.payload);
        console.log(movies);
        yield put(setMovies(movies.results));
        yield put(setTotalPages(movies.total_pages))
        yield put(setSearchTitle(movies.title))
    } catch (error){
        alert(error.message);
    }
}

function* handleGetMovie(action){
    try {
        const movie = yield call(movieService.getMovie, action.payload);
        yield put(setMovie(movie));
    } catch (error) {
        alert(error.message);
    }
}

function* handleCreateMovie(action){
    try {
        const newMovie = yield call(movieService.createMovie, action.payload);
        yield put(setMoviesWithNewMovie(newMovie));
        yield call(forwardTo, '/movies');
    } catch (error) {
        console.log(error.message);
    }
}

export function* watchGetMovies(){
    yield takeLatest(getMovies.type, handleGetMovies);
}

export function* watchGetMovie(){
    yield takeLatest(getMovie.type, handleGetMovie);
}

export function* watchCreateMovie(){
    yield takeLatest(createMovie.type, handleCreateMovie);
}

function forwardTo(location) {
    history.push(location);
}