import React, { useEffect, useState } from 'react';
import axios from './axios';
import './Banner.css';
import requests from './request';

const Banner = () => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const req = await axios.get(requests.fetchNetflixOrignals);
      const randomIndex = Math.floor(
        Math.random() * req.data.results.length - 1
      );
      setMovie(req.data.results[randomIndex]);
    }
    fetchData();
  }, []);

  return (
    <header
      className='banner'
      style={{
        backgroundSize: 'cover',
        backgroundImage: `url(
          https://image.tmdb.org/t/p/original/${movie?.backdrop_path}
        )`,
        backgroundPosition: 'center center',
      }}
    >
      <div className='banner_contents'>
        <h1 className='banner_title'>
          {movie?.name || movie?.original_name || movie?.title}
        </h1>
        <div className='banner_buttons'>
          <button className='banner_button'>Play</button>
          <button className='banner_button'>My List</button>
        </div>

        <h1 className='banner_description'>{movie?.overview}</h1>
      </div>
      <div className='banner-fade-bottom'></div>
    </header>
  );
};

export default Banner;
