import React from 'react';

const Home = ({ setShowHome }) => {
  return (
    <div className="row text-center mt-5">
      <h1>Welcome to Movie Explorer</h1>
      <button
        className="btn btn-primary mt-3"
        onClick={() => setShowHome(false)} // Navigate to the movie search
      >
        Explore Movies
      </button>
    </div>
  );
};

export default Home;
