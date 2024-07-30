import React, { useEffect, useState } from 'react';
// importing link from axios
import axios from '../../src/axios';
import './Row.css';
import { useNavigate } from 'react-router-dom';
const Row = ({ title, fetchUrl }) => {
  const [movie, setMovie] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      let request = await axios.get(fetchUrl);
      setMovie(request.data.results);
      return request;
    }

    fetchData();
  }, [fetchUrl]);

  console.log(movie);

  //! image link
  const img_url = 'https://image.tmdb.org/t/p/original';

  return (
    <>
      <div className='row'>
        <h1>{title}</h1>
        <div className='row__posters'>
          {movie.map((movie) => {
            return (
              <img
                key={movie.id}
                className={`row__poster`}
                src={`${img_url}${movie.backdrop_path}`}
                alt={movie.original_title}
                //! we are navigating to different page and also attaching the current state so that we can have access to the state in different component using useLocation hook.
                onClick={() => {
                  navigate('/movie', { state: { movie } });
                }}
              ></img>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Row;
