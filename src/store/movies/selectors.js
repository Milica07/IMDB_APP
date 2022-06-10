export function selectMovies(state){
    return state.movies.movies;
}

export function selectMovie(state){
    return state.movies.movie;
}

export function selectTotalPages(state){
    return state.movies.totalPages;
}

export function selectSearchTitle(state){
    return state.movies.title;
} 

export function selectRelatedMovies(state){
    return state.movies.related;
} 

export function selectPopularMovies(state){
    return state.movies.popular;
} 

export function selectMovieComments(state){
    return state.movies.comments;
} 

export function selectWatchListMovies(state){
    return state.movies.watchList;
}

export function selectCommentsCount(state){
    return state.movies.commentsCount;
}
