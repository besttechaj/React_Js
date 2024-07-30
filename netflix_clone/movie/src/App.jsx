import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Row from './components/Row';
import req from './request';
import Movie from './components/Movie';
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path='/'
            element={
              <>
                <Row title='TRENDING' fetchUrl={req.trending} />
                <Row title='TvSHOW' fetchUrl={req.fetchNetflixOriginals} />
              </>
            }
          />

          <Route path='/movie' element={<Movie />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
