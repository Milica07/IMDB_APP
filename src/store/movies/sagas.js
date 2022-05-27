import { put, call, takeLatest } from "redux-saga/effects";
import { getMovies, getMovie, setMovies, setMovie } from "./slice";
import movieService from "../../services/MovieService";

function* handleGetMovies(action){
    try{
        const movies = yield call(movieService.getMovies, action.payload);
        console.log(movies);
        yield put(setMovies(movies));
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

export function* watchGetMovies(){
    yield takeLatest(getMovies.type, handleGetMovies);
}

export function* watchGetMovie(){
    yield takeLatest(getMovie.type, handleGetMovie);
}
