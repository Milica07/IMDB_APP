import { createSlice } from "@reduxjs/toolkit";

const middlewareActions = {
    login: () => {},
    logout: () => {},
    register: () => {},   
    getActiveUser: () => {},
    
};

const authSlice = createSlice({
    name: "auth",
    initialState: {
        accessToken: localStorage.getItem("accessToken"),
        activeUser: null,
        loginError: false,
        registerError: false,
    },
    reducers: {
        setActiveUser: (state, action) => {
            state.activeUser = action.payload;
        },
        setToken: (state, action) => {
            state.accessToken = action.payload;
        },
        setLoginError: (state, action) => { 
            state.loginError = action.payload;
        },
        setRegisterError: (state, action) => {
            state.registerError = action.payload;
        },
        ...middlewareActions
    }
});

export const { login, logout, register, getActiveUser, setActiveUser, setToken, 
    setLoginError, setRegisterError } = authSlice.actions;
export default authSlice.reducer;