import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectMovie, selectRelatedMovies } from "../store/movies/selectors";
import { getMovie, getRelatedMovies, likeMovie, dislikeMovie } from "../store/movies/slice";
import { MOVIE_GENRES } from '../components/movies';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import { Link } from "react-router-dom";
import SingleMovieViews from "../components/SingleMovieViews";
import LikesDislikes from "../components/LikesDislikes";

function SingleMoviePage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const movie = useSelector(selectMovie);
  const related = useSelector(selectRelatedMovies);

  useEffect(() => {
    dispatch(getMovie(id));
  }, 
  [id, dispatch]);

  useEffect(() => {
    if (!movie) { return };
    dispatch(getRelatedMovies({genre: movie.genre}))
  }, 
  [movie, dispatch]);


  return (
    <>
      {movie && (
        <div>
          <p>{ movie.title }</p>
          <p>{ movie.description }</p>
          <img src={ movie.cover_image_url } width='96' height='130' alt="Not available" />
          <h6>{ MOVIE_GENRES[movie.genre] }</h6>
        </div>
      )}
      {related.length > 0 ? (
          related.map((movie) => (         
              <Link key={movie.id} to={`/movies/${movie.id}`}>
                <ListGroupItem>{movie.title}</ListGroupItem>
              </Link>
          ))
          ) : (
          <small>No related movies</small>)}
      <SingleMovieViews movie={movie} />
      <LikesDislikes movie={movie}/>
    </>
  );
}

export default SingleMoviePage;