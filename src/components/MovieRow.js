import React from 'react';
import { MOVIE_GENRES } from './movies'
import { Link } from 'react-router-dom';
import SingleMovieViews from "../components/SingleMovieViews";
import { IoEye } from 'react-icons/io5';

export default function MovieRow({ movie }) {

    return (
      <div>  <br/><br/>
          <p><strong>{ movie.title }</strong></p> 
          <Link to={`movies/${movie.id}`}>Details</Link>
          <p>{ movie.description }</p>
          <img src={ movie.cover_image_url } width='96' height='130' alt="Not available" /> 
          <h6>{ MOVIE_GENRES[movie.genre] }</h6>
        <IoEye/> <SingleMovieViews movie={movie} /> 
      </div>
    );
}