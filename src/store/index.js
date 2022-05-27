import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga/";
import auth from "./auth/slice";
import sagas from "./rootSaga";
import movies from "./movies/slice";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {
      auth,
      movies,
    },
    middleware: [...getDefaultMiddleware(), sagaMiddleware], 
});

for (const saga in sagas) {
    sagaMiddleware.run(sagas[saga]);
}

export default store;