import React, { useState, useEffect } from 'react';
import './home.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // Make sure this is included
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Bootstrap JS for carousel functionality

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch recent movies from OMDB API
  const fetchRecentMovies = async () => {
    const currentYear = new Date().getFullYear();
    const url = `http://www.omdbapi.com/?s=movie&y=${currentYear}&apikey=63996807`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      if (data.Response === "True") {
        setMovies(data.Search); // Store the movies in state
      } else {
        setError("No movies found for this year.");
      }
    } catch (error) {
      setError("Error fetching movies.");
    } finally {
      setLoading(false); // Set loading to false once the data is fetched
    }
  };

  useEffect(() => {
    fetchRecentMovies(); // Fetch the latest movies on component mount
  }, []);

  // Handle loading and error states
  if (loading) {
    return <div>Loading movies...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="container mt-5">
      <h2>Recent Movies of {new Date().getFullYear()}</h2>

      <div
        id="movieCarousel"
        className="carousel slide thumb"
        data-bs-ride="carousel"
        data-bs-interval="3000"
        
      >
        <div className="carousel-inner">
          {movies.reduce((acc, movie, index) => {
            if (index % 3 === 0) acc.push(movies.slice(index, index + 3));
            return acc;
          }, []).map((group, index) => (
            <div
              key={index}
              className={`carousel-item ${index === 0 ? 'active' : ''}`}
            >
              <div className="row">
                {group.map((movie) => (
                  <div key={movie.imdbID} className="col-md-4">
                    <div className="card-box ">
                      <img
                        src={movie.Poster}
                        className="card-img-top carousel-image"
                        alt={movie.Title}
                      />
                      <div className="card-body  ">
                        {/* <h5 className="card-title ">{movie.Title}</h5>
                        <p className="card-text ">{movie.Year}</p> */}
                       
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Carousel Controls */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#movieCarousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#movieCarousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Home;
