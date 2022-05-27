export function selectActiveUser(state){
    return state.auth.activeUser;
}

export function selectIsAuthenticated(state){
    return !!state.auth.accessToken;
}

export function selectLoginError(state){
    return !!state.auth.loginError;
}

export function selectRegisterError(state){
    return state.auth.registerError;
}