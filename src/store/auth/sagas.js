import { put, call, takeLatest } from "redux-saga/effects";
import { login, logout, register, getActiveUser, setActiveUser, setToken, setRegisterError,
    setLoginError } from "./slice";
import authService from "../../services/AuthService";
import { history } from "../../history";

function* handleRegister(action){
    try{
        const {user, token} = yield call(authService.register, action.payload);
        yield put(setToken(token));
        yield put(setActiveUser(user));
        yield call(forwardTo, '/login');
    } catch (error){
        console.log('error triggered')
        yield put(setRegisterError(true));
    }
}

function* handleLogin(action){
    try {
        const {user, token} = yield call(authService.login, action.payload);
        yield put(setToken(token));
        yield put(setActiveUser(user));
        yield call(forwardTo, '/movies');
    } catch (error) {
        yield put(setLoginError(true));
    }
}

function* handleLogout(){
    try {
        yield call(authService.logout);
        yield put(setToken(null));
        yield put(setActiveUser(null));
        yield call(forwardTo, '/login');
    } catch (error) {
        yield put(setToken(null));
        yield put(setActiveUser(null));
        alert("Can`t logout as a guest");
    }
}

function* handleGetActiveUser(){
    try {
        const activeUser = yield call(authService.getActiveUser);
        yield put(setActiveUser(activeUser));
    } catch (error) {
        yield put(setToken(null));
        yield put(setActiveUser(null));
        console.log("Session expired");
    }
}

export function* watchLogin(){
    yield takeLatest(login.type, handleLogin);
}

export function* watchLogout(){
    yield takeLatest(logout.type, handleLogout);
}

export function* watchRegister(){
    yield takeLatest(register.type, handleRegister);
}

export function* watchGetActiveUser(){
    yield takeLatest(getActiveUser.type, handleGetActiveUser);
}

function forwardTo(location) {
    history.push(location);
}