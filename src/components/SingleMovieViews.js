import React from "react";

function SingleMovieViews({ movie }) {
  return (
    <>
    {movie && (
    <div>
      {movie.number_of_views === 1 ? (
        <small>This movie page has been viewed 1 time</small>
      ) : (
        <small>This movie page has been viewed {movie.number_of_views} times</small>
      )}
    </div> )}
    </>
  );
}

export default SingleMovieViews;