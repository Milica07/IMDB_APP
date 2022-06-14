import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import { FaPlus, FaMinus } from 'react-icons/fa';
import { addRemoveWatchList, updateWatched } from '../store/movies/slice';

const WatchListItem = ({ movie }) => {
  const dispatch = useDispatch();

  return (
    <Card className='d-flex justify-content-center' style={{maxWidth: '70%'}}>
      <Card.Text><Link to={`/api/movies/${movie.id}`}>{movie.title}</Link></Card.Text>
          <h6>
            {movie.watched_by_user && (
              <Badge pill bg="warning">Watched</Badge>
            )}
          </h6>

      {movie.watched_by_user ? (
        <Button
          className='mb-2'
          variant="warning"
          title="Remove from watch list"
          onClick={() => dispatch(updateWatched(movie.id))}>
          <FaMinus /> watched
        </Button>
      ) : (
        <Button
          variant="outline-warning"
          className='mb-2'
          title="Add to watch list"
          onClick={() => dispatch(updateWatched(movie.id))}>
          <FaPlus /> watched
        </Button>
      )}

      {movie.in_users_watchlist ? (
        <Button
          variant="danger"
          className='mb-2'
          title="Remove from watch list"
          onClick={() => dispatch(addRemoveWatchList(movie.id))}>
          <FaMinus /> Watch list
        </Button>
      ) : (
        <Button
          variant="primary"
          className='mb-2'
          title="Add to watch list"
          onClick={() => dispatch(addRemoveWatchList(movie.id))}>
          <FaPlus /> Watch list
        </Button>
      )}
    </Card>
  );
};

export default WatchListItem;