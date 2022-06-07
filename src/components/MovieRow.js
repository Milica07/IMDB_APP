import React from 'react';
import { MOVIE_GENRES } from './movies'
import { Link } from 'react-router-dom';
import SingleMovieViews from "../components/SingleMovieViews";
import Button from 'react-bootstrap/Button';
import { GrLike, GrDislike } from 'react-icons/gr';

export default function MovieRow({ movie, onLike, onDislike }) {

    return (
      <div>  
          <p>{ movie.title }</p> <Link to={`movies/${movie.id}`}>Details</Link>
          <p>{ movie.description }</p>
          <img src={ movie.cover_image_url } width='96' height='130' alt="Not available" /> 
          <h6>{ MOVIE_GENRES[movie.genre] }</h6>
          <SingleMovieViews movie={movie} />

          {movie.likes}
        <Button
          variant={movie.liked_by_user ? 'success' : 'outline-success'}
          onClick={() => onLike(movie.id)}
        >
          <GrLike />
        </Button>
        <Button
          variant={movie.disliked_by_user ? 'danger' : 'outline-danger'}
          onClick={() => onDislike(movie.id)}
        >
          <GrDislike />
        </Button>
          {movie.dislikes}
      </div>
    );
}