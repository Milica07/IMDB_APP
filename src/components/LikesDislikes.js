import React from "react";
import { useDispatch } from "react-redux";
import { likeMovie, dislikeMovie } from "../store/movies/slice";
import Button from 'react-bootstrap/Button';
import { GrLike, GrDislike } from 'react-icons/gr';

function LikesDislikes({ movie }) {
    const dispatch = useDispatch();
    return (
        <>
          {movie && (
          <div>
            {movie.likes}
            <Button
                variant={movie.liked_by_user ? 'success' : 'outline-success'}
                onClick={() => dispatch(likeMovie(movie.id))}
              >
                <GrLike />
              </Button>
              <Button
                variant={movie.disliked_by_user ? 'danger' : 'outline-success'}
                onClick={() => dispatch(dislikeMovie(movie.id))}
              >
                <GrDislike />
              </Button>
            {movie.dislikes}
          </div> 
          )}
          </>
        );
      }
      
export default LikesDislikes;