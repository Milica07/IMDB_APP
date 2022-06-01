import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectMovies, selectTotalPages } from "../store/movies/selectors";
import { getMovies } from "../store/movies/slice";
import MovieRow from "../components/MovieRow";
import PageNavigation from "../components/PageNavigation";

export default function Movies() {
    const dispatch = useDispatch();
    const movies = useSelector(selectMovies);
    const totalPages = useSelector(selectTotalPages);
    const [page, setPage] = useState(1);

    useEffect(() => {
        dispatch(getMovies(page));
    }, 
    [dispatch, page]);

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
                <PageNavigation setPage={setPage} page={page} totalPages={totalPages} />
                </div>
            ) : (
                <div>No search results found.</div>
            )}
        </div>
    ); 
} 