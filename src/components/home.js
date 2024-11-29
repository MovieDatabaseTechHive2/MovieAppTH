import React, { useState, useEffect, useRef } from 'react';
import './home.css';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const scrollerRef = useRef(null); // Reference to the scroller

  // Fetch recent movies from OMDB API
  const fetchRecentMovies = async () => {
    const currentYear = new Date().getFullYear();
    const url = `http://www.omdbapi.com/?s=movie&y=${currentYear}&apikey=63996807`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      if (data.Response === 'True') {
        setMovies(data.Search); // Store the movies in state
      } else {
        setError('No movies found for this year.');
      }
    } catch (error) {
      setError('Error fetching movies.');
    } finally {
      setLoading(false); // Set loading to false once the data is fetched
    }
  };

  useEffect(() => {
    fetchRecentMovies(); // Fetch the latest movies on component mount
  }, []);

  // Scroll the scroller by a set amount
  const scroll = (direction) => {
    const scrollAmount = 300; // Amount to scroll (px)
    if (direction === 'left') {
      scrollerRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    } else if (direction === 'right') {
      scrollerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  // Handle loading and error states
  if (loading) {
    return <div>Loading movies...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="scroller-container">
      <h2>Recent Movies of {new Date().getFullYear()}</h2>
      <div className="scroller-wrapper">
        {/* Left button */}
        <button className="scroller-button left" onClick={() => scroll('left')}>
          &#8249;
        </button>

        {/* Scroller */}
        <div className="scroller" ref={scrollerRef}>
          {movies.map((movie) => (
            <div key={movie.imdbID} className="scroller-item">
              <div className="card">
                <img
                  src={movie.Poster}
                  className="card-img-top"
                  alt={movie.Title}
                />
                <div className="card-body">
                  <h5 className="card-title">{movie.Title}</h5>
                  <p className="card-text">{movie.Year}</p>
                  <a
                    href={`https://www.imdb.com/title/${movie.imdbID}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                  >
                    View on IMDb
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right button */}
        <button className="scroller-button right" onClick={() => scroll('right')}>
          &#8250;
        </button>
      </div>
    </div>
  );
};

export default Home;
