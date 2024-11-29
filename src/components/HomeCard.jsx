import React, { useState, useEffect } from 'react';

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
      <div className="row">
        {movies.map((movie) => (
          <div key={movie.imdbID} className="col-md-4 mb-4">
            <div className="card">
              <img src={movie.Poster} className="card-img-top" alt={movie.Title} />
              <div className="card-body">
                <h5 className="card-title">{movie.Title}</h5>
                <p className="card-text">{movie.Year}</p>
               
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeCard;
