import { MOVIE_GENRES } from './movies'

export default function MovieRow({ movie }) {

    return (
      <div>  
          <p>{ movie.title }</p>
          <p>{ movie.description }</p>
          <img src={ movie.cover_image_url } width='96' height='130' alt="Not available" />
          <h6>{ MOVIE_GENRES[movie.genre] }</h6>
      </div>
    );
}