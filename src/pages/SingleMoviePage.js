import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { selectMovie, selectRelatedMovies } from "../store/movies/selectors";
import { getMovie, getRelatedMovies, addRemoveWatchList, getComments, } from "../store/movies/slice";
import { MOVIE_GENRES } from '../components/movies';
import SingleMovieViews from "../components/SingleMovieViews";
import LikesDislikes from "../components/LikesDislikes";
import Comment from "../components/Comment";
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import Badge from 'react-bootstrap/Badge';
import { FaPlus, FaMinus } from 'react-icons/fa';
import Button from 'react-bootstrap/Button';

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
    dispatch(getComments({id: movie.id}))
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
          <h6>
            {movie.watched_by_user && (
              <Badge pill bg="warning">
                Watched
              </Badge>
            )}
          </h6>
          {movie.in_users_watchlist ? (
          <Button
            variant="danger"
            className="shadow-none mb-2"
            title="Remove from watch list"
            onClick={() => dispatch(addRemoveWatchList(movie.id))}
          >
            <FaMinus /> watch list
          </Button>
          ) : (
          <Button
            variant="primary"
            className="shadow-none mb-2"
            title="Add to watch list"
            onClick={() => dispatch(addRemoveWatchList(movie.id))}
          >
            <FaPlus /> watch list
          </Button>
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
          <LikesDislikes key = {movie.id} movie={movie}/>
          <Comment movie={movie}/>
        </div>
      )}
    </>
  );
}
export default SingleMoviePage;