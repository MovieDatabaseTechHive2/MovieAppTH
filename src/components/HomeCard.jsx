import React, { useState, useEffect } from 'react';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch trending movies from TMDb API
  const fetchTrendingMovies = async () => {
    const apiKey = '1a6503b5d2cab21a032a517aeaeea561';
    const url = `https://api.themoviedb.org/3/trending/movie/day?api_key=${apiKey}`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      if (data.results && data.results.length > 0) {
        setMovies(data.results); // Store the trending movies in state
      } else {
        setError("No trending movies found.");
      }
    } catch (error) {
      setError("Error fetching trending movies.");
    } finally {
      setLoading(false); // Set loading to false once the data is fetched
    }
  };

  useEffect(() => {
    fetchTrendingMovies(); // Fetch the trending movies on component mount
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
      <h2>Trending Movies</h2>
      <div className="row">
        {movies.map((movie) => (
          <div key={movie.id} className="col-md-4 mb-4">
            <div className="card">
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                className="card-img-top"
                alt={movie.title}
              />
              <div className="card-body">
                <h5 className="card-title">{movie.title}</h5>
                <p className="card-text">Release Date: {movie.release_date}</p>
                <p className="card-text">Rating: ★ {movie.vote_average}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeCard;
