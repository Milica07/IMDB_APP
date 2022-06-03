import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectMovies, selectTotalPages } from "../store/movies/selectors";
import { getMovies } from "../store/movies/slice";
import MovieRow from "../components/MovieRow";
import PageNavigation from "../components/PageNavigation";
import MovieSearch from "../components/MovieSearch";

import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import { MOVIE_GENRES } from '../components/movies'

export default function Movies() {
    const dispatch = useDispatch();
    const movies = useSelector(selectMovies);
    const totalPages = useSelector(selectTotalPages);
    const [page, setPage] = useState(1);
    const [search, setSearch] = useState("");
    const [genre, setGenre] = useState(null);

    useEffect(() => {
        dispatch(getMovies({page, search, genre}));
    }, 
    [dispatch, page, search, genre]);

    const getOptions = () => {
        const defaultOption = [
          <option key="Any" value="">
            Any genre
          </option>,
        ];

        return defaultOption.concat(
            Object.keys(MOVIE_GENRES).map((genre) => {
            return (
              <option key={genre} value={genre}>
                {MOVIE_GENRES[genre]}
              </option>
            );
          }),
        );
    };

    const handleChangeGenre = (event) => {
        setGenre(event.target.value)
    };

    return (
        <div>
            <br/>
            <h3>Movies</h3>

            <Col md={3}>
                <Form.Select className="shadow-none" onChange={handleChangeGenre}>
                    {getOptions()}
                </Form.Select>
            </Col>

            <MovieSearch search={search} setSearch={setSearch} />
            <br/>
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