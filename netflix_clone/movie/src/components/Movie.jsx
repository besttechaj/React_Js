import React from 'react';
import { useLocation } from 'react-router-dom';
import Row from './Row';
const Movie = () => {
  let loc = useLocation();
  const specificMovie = loc.state.movie;
  console.log(specificMovie);
  return (
    <div>
      <Row />
    </div>
  );
};

export default Movie;
