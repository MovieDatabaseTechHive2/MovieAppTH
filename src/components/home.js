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

  // Auto-scroll logic
  useEffect(() => {
    const autoScroll = setInterval(() => {
      if (scrollerRef.current) {
        scrollerRef.current.scrollBy({
          left: 200, // Scroll by 300px
          behavior: 'smooth',
        });
      }
    }, 3000); // Scroll every 3 seconds

    // Clear interval on unmount
    return () => clearInterval(autoScroll);
  }, []);

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
        {/* Scroller */}
        <div className="scroller" ref={scrollerRef}>
          {movies.map((movie) => (
            <div key={movie.imdbID} className="scroller-item">
              <div className="card thumb">
                <img
                  src={movie.Poster}
                  className="card-img-top"
                  alt={movie.Title}
                />
                <div className="content">
                <div className="detial">
                <div className="title">
                <h5 className="card-title">{movie.Title}</h5>
                  <p className="card-text">{movie.Year}</p>
                 
                </div>
                </div>
                
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
