import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getWatchList } from '../store/movies/slice';
import { selectWatchListMovies } from '../store/movies/selectors';
import Row from 'react-bootstrap/Row';
import WatchListItem from '../components/WatchListItem';

const WatchList = () => {
  const dispatch = useDispatch();
  const movies = useSelector(selectWatchListMovies);

  useEffect(() => {
    dispatch(getWatchList());
  }, 
  []);

  return(
    <Row>
    {movies && (
      <div className="d-flex flex-column justify-content-center align-items-center">
        {movies.map((movie) => (         
          <WatchListItem key={movie.id} movie={movie} />
        ))}
      </div>
    )}
    </Row>
  )
};

export default WatchList;