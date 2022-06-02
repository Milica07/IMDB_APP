import React from "react";
import { DebounceInput } from 'react-debounce-input';

function MovieSearch({ search, setSearch }) {
  return (
    <div>
        <DebounceInput
        type="text" name="search" value={search}
        placeholder="Search..."
        debounceTimeout={ 750 }
        onChange={(e) => setSearch(e.target.value)}/>
    </div>
);
}

export default MovieSearch;