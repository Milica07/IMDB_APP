import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPopular } from '../store/movies/slice';
import { selectPopularMovies } from '../store/movies/selectors';
import { Link } from "react-router-dom";
import ListGroupItem from 'react-bootstrap/ListGroupItem';


export default function PopularMoviesPage() {
  const dispatch = useDispatch();
  const popular = useSelector(selectPopularMovies);

  useEffect(() => {
    dispatch(getPopular());
  }, 
  [dispatch]);

return (
    <div>
      <h4> Popular movies </h4>
      {popular.length > 0 ? (
          popular.map((movie, index) => (         
              <Link key={movie.id} to={`/movies/${movie.id}`}>
                <ListGroupItem>{index + 1}. {movie.title}</ListGroupItem>
              </Link>
          ))
          ) : (
          <small>No popular movies</small>)}
    </div>
  );
};