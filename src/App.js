import React from 'react';
import './App.css';
import Row from './Row';
import requests from './request';
import Banner from './Banner';
import Nav from './Nav';

function App() {
  return (
    <div className='App'>
      <Nav />
      <Banner />

      <Row
        className='row'
        title='Netflix Originals'
        fetchUrl={requests.fetchNetflixOrignals}
        isLargeRow
      />
      <Row className='row' title='Trending' fetchUrl={requests.fetchTrending} />
      <Row
        className='row'
        title='Top rated'
        fetchUrl={requests.fetchTopRated}
      />
      <Row
        className='row'
        title='Horror Movies'
        fetchUrl={requests.fetchHorrorMovies}
      />
      <Row
        className='row'
        title='Action Movies'
        fetchUrl={requests.fetchActionMovies}
      />
      <Row
        className='row'
        title='Comedy Movies'
        fetchUrl={requests.fetchComedyMovies}
      />
      <Row
        className='row'
        title='Romantic Movies'
        fetchUrl={requests.fetchRomanticMovies}
      />
    </div>
  );
}

export default App;
