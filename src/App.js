import React, { useState, useEffect } from 'react';
import MovieList from './components/movieList';
import SearchBar from './components/searchBar';
import NavigationBar from './components/navbar';
import Home from './components/home'; // Import the new Home component
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';



function App() {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [searchMovie, setSearchMovie] = useState('');
  const [showHome, setShowHome] = useState(true); // Manage home visibility

  const getMoviesRequest = async (searchTerm) => {
    if (!searchTerm) return;

    const url = `http://www.omdbapi.com/?s=${searchTerm}&apikey=63996807`;

    try {
      const response = await fetch(url);
      const responseJson = await response.json();

      if (responseJson.Response === "True") {
        setMovies(responseJson.Search);
      } else {
        setMovies([]);
      }
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  const getMovieDetails = async (imdbID) => {
    const url = `http://www.omdbapi.com/?i=${imdbID}&apikey=63996807`;

    try {
      const response = await fetch(url);
      const responseJson = await response.json();

      if (responseJson.Response === "True") {
        setSelectedMovie(responseJson);
      } else {
        console.error("Movie details not found.");
      }
    } catch (error) {
      console.error("Error fetching movie details:", error);
    }
  };

  useEffect(() => {
    if (searchMovie) {
      getMoviesRequest(searchMovie);
    }
  }, [searchMovie]);

  return (
    <div className="container bg">
      {selectedMovie ? (
        <div className="flex-center">
          <img className="img-size" src={`${selectedMovie.Poster}`} alt={selectedMovie.Title} />
          <div className="movie-card">
            <div className="movie-details">
              <div className="card-body">
                <h2 className="card-title">{selectedMovie.Title}</h2>
                <p className="bold">{selectedMovie.Director}</p>
                <p className="bold">★ {selectedMovie.imdbRating} | {selectedMovie.Runtime}</p>
                <p><strong>GENRE</strong></p>
                <p>{selectedMovie.Genre}</p>
                <p>{selectedMovie.Year}</p>
                <p><strong>SYNOPSIS</strong></p>
                <p>{selectedMovie.Plot}</p>
                <p><strong>ACTORS</strong></p>
                <p className="blue-font">{selectedMovie.Actors}</p>
                <button
                  className="btn btn-primary"
                  onClick={() => setSelectedMovie(null)}
                >
                  Back to Search Results
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : showHome ? (
        <Home setShowHome={setShowHome} /> // Render Home component
      ) : (
        <div className="movie-search">
          <div className="row">
            <NavigationBar />
          </div>
          <div className="row serachBar">
            <SearchBar value={searchMovie} setSearchMovie={setSearchMovie} />
          </div>
          <div className="row">
            <MovieList movies={movies} onSelectMovie={getMovieDetails} />
          </div>
          <div className="row mt-3">
            <button
              className="btn btn-secondary"
              onClick={() => setShowHome(true)} // Navigate back to home page
            >
              Back to Home
            </button>
          </div>
        </div>
      )}
            <footer className="bg-dark text-light py-3 text-center">
        <p>© 2024 Movie Explorer. All rights reserved. Created by Tech Hivies Movie Studio.</p>
      </footer>
    </div>
  );
}
export default App;
