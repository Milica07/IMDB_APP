import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectMovies } from "../store/movies/selectors";
import { getMovies } from "../store/movies/slice";
import MovieRow from "../components/MovieRow";

export default function Movies() {
    const dispatch = useDispatch();
    const movies = useSelector(selectMovies);

    useEffect(() => {
        dispatch(getMovies());
    }, 
    [dispatch]);

    return (
        <div>
            <br/>
            <h3>Movies</h3>
            {movies.length ? (
                <div>
                <ul>
                    {movies.map((movie) => (
                        <MovieRow key={movie.id} movie={movie} />
                    ))}
                </ul>
                </div>
            ) : (
                <div>No search results found.</div>
            )}
        </div>
    ); 
} 