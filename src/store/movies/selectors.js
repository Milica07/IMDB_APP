export function selectMovies(state){
    return state.movies.movies;
}

export function selectMovie(state){
    return state.movies.movie;
}

export function selectTotalPages(state){
    return state.movies.totalPages;
}
