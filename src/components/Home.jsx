import React, { useState, useEffect, useRef } from 'react';
import './home.css';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const scrollerRef = useRef(null); // Reference to the scroller

  // Fetch trending movies from TMDb API
  const fetchTrendingMovies = async () => {
    const apiKey = '1a6503b5d2cab21a032a517aeaeea561'; // Replace with your actual TMDb API key
    const url = `https://api.themoviedb.org/3/trending/movie/day?api_key=${apiKey}`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      if (data.results && data.results.length > 0) {
        setMovies(data.results); // Store the trending movies in state
      } else {
        setError('No trending movies found.');
      }
    } catch (error) {
      setError('Error fetching trending movies.');
    } finally {
      setLoading(false); // Set loading to false once the data is fetched
    }
  };

  useEffect(() => {
    fetchTrendingMovies(); // Fetch trending movies on component mount
  }, []);

  // Auto-scroll logic
  useEffect(() => {
    const autoScroll = setInterval(() => {
      if (scrollerRef.current) {
        scrollerRef.current.scrollBy({
          left: 200, // Scroll by 200px
          behavior: 'smooth',
        });
      }
    }, 3000); // Scroll every 3 seconds

    // Clear interval on unmount
    return () => clearInterval(autoScroll);
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
      
      <div className="video-container">
      <video className="one-third-screen-video" autoPlay muted loop>
        <source src="./images/Movies.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
      <h2>Trending Movies</h2>
      <div className="scroller-wrapper">

        {/* Left button */}
        <button className="scroller-button left" onClick={() => scroll('left')}>
          &#8249;
        </button>

        {/* Scroller */}
        <div className="scroller" ref={scrollerRef}>
          {movies.map((movie) => (
            <div key={movie.id} className="scroller-item">
              <div className="card thumb">
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  className="card-img-top"
                  alt={movie.title}
                />

                {/* Movie details that show on hover */}
                <div className="content">
                  <div className="detial">
                    <div className="title">
                      <h5 className="card-title">{movie.title}</h5>
                      <p className="card-text">Release Date: {movie.release_date}</p>
                      <p className="card-text">Rating: ★ {movie.vote_average}</p>
                    </div>
                  </div>
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
