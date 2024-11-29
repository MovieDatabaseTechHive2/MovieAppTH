import React from 'react';
import { homeData, upcome, latest, trending, recommended } from '../data/movieData';

const Section = ({ title, data }) => (
  <div className="section">
    <h2>{title}</h2>
    <div className="movies">
      {data.map((movie) => (
        <div key={movie.id} className="movie-card">
          <img src={movie.cover} alt={movie.name} />
          <h3>{movie.name}</h3>
          <p>{movie.time}</p>
          <p>{movie.desc}</p>
        </div>
      ))}
    </div>
  </div>
);

const Home = ({ setShowHome }) => {
  return (
    <div className="container">
      <div className="row text-center mt-5">
        <h1>Welcome to Movie Explorer</h1>
        <button
          className="btn btn-primary mt-3"
          onClick={() => setShowHome(false)} // Navigate to the movie search
        >
          Explore Movies
        </button>
      </div>
      
      {/* Movie sections */}
      <Section title="Featured Movies" data={homeData} />
      {/* <Section title="Upcoming Movies" data={upcome} />
      <Section title="Latest Movies" data={latest} />
      <Section title="Trending Now" data={trending} />
      <Section title="Recommended for You" data={recommended} /> */}
    </div>
  );
};

export default Home;
