import { put, call, takeLatest } from "redux-saga/effects";
import { getMovies, getMovie, setMovies, setMovie, setTotalPages,
    createMovie, setMoviesWithNewMovie, setRelatedMovies, getRelatedMovies, 
    likeMovie, dislikeMovie, updateMovie, getPopular, setPopular, postComment, setComments,
    getComments, addComment, setWatchList, getWatchList, addRemoveWatchList, updateWatched, setCommentsCount
    } from "./slice";
import movieService from "../../services/MovieService";
import { history } from "../../history";

function* handleGetMovies(action){
    try{
        const movies = yield call(movieService.getMovies, action.payload);
        console.log(movies);
        yield put(setMovies(movies.results));
        yield put(setTotalPages(movies.total_pages));
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

function* handleRelatedMovies(action) {
    try {
      const relatedMovies = yield call(movieService.getRelatedMovies, action.payload);
      console.log(relatedMovies);
      yield put(setRelatedMovies(relatedMovies.results));
    } catch (error) {
        console.log(error.message);
    }
  }

function* handleLikeMovie(action) {
    try {
      const liked = yield call(movieService.likeMovie, action.payload);
      yield put(setMovie(liked));
      yield put(updateMovie(liked));
    } catch (error) {
      console.log(error.message);
    }
  }
  
function* handleDislikeMovie(action) {
    try {
      const disliked = yield call(movieService.dislikeMovie, action.payload);
      console.log(disliked);
      yield put(setMovie(disliked));
      yield put(updateMovie(disliked));
    } catch (error) {
      console.log(error.message);
    }
  }

  function* handlePopularGet(action) {
    try {
      const data = yield call(movieService.getPopular, action.payload);
      yield put(setPopular(data));
    } catch (error) {
      console.log(error.message);
    }
  }

  function* handleMovieComment(action) {
    try {
      const data = yield call(movieService.postComment, action.payload);
      yield put(addComment(data));
    } catch (error) {
      console.log(error.message);
    }
  }

  function* handleCommentsGet(action) {
    try {
      const { data } = yield call(movieService.getComments, action.payload);
      yield put(setComments(data.results));
      yield put(setCommentsCount(data.count))
    } catch (error) {
      console.log(error.message);
    }
  }

  function* handleWatchList(action) {
    try {
      const { data } = yield call(movieService.getWatchList, action.payload);
      yield put(setWatchList(data));
    } catch (error) {
      console.log(error.message);
    }
  }

  function* handleWatchListAddRemove(action) {
    try {
      const data = yield call(movieService.addRemoveWatchList, action.payload);
      yield put(setMovie(data));
      yield put(updateMovie(data));
    } catch (error) {
      console.log(error.message);
    }
  }

  function* handleWatchedUpdate(action) {
    try {
      const data = yield call(movieService.updateWatched, action.payload);
      yield put(setMovie(data));
      yield put(updateMovie(data));
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

export function* watchGetRelatedMovies(){
    yield takeLatest(getRelatedMovies.type, handleRelatedMovies);
}

export function* watchLikeMovie(){
  yield takeLatest(likeMovie.type, handleLikeMovie);
}

export function* watchDislikeMovie(){
  yield takeLatest(dislikeMovie.type, handleDislikeMovie);
}

export function* watchPopularGet(){
  yield takeLatest(getPopular.type, handlePopularGet);
}

export function* watchMovieComment(){
  yield takeLatest(postComment.type, handleMovieComment);
}

export function* watchCommentsGet(){
  yield takeLatest(getComments.type, handleCommentsGet);
}

export function* watchWatchList(){
  yield takeLatest(getWatchList.type, handleWatchList);
}

export function* watchWatchListAddRemove(){
  yield takeLatest(addRemoveWatchList.type, handleWatchListAddRemove);
}

export function* watchWatchedUpdate(){
  yield takeLatest(updateWatched.type, handleWatchedUpdate);
}

function forwardTo(location) {
    history.push(location);
}