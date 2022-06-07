import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectMovie } from "../store/movies/selectors";
import { getMovie } from "../store/movies/slice";
import { MOVIE_GENRES } from '../components/movies'

function SingleMoviePage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const movie = useSelector(selectMovie);

  useEffect(() => {
    dispatch(getMovie(id));
  }, [id, dispatch]);

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
    </>
  );
}

export default SingleMoviePage;