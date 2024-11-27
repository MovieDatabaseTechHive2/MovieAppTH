import React, { useState, useEffect } from 'react';
import MovieList from './components/movieList'; // Movie list component
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MovieListnav from './components/movieListnav'; // Navigation component
import SearchBar from './components/searchBar'; // Search bar component
import navbar from './components/navbar';
import NavigationBar from './components/navbar';
function App() {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null); // To store the selected movie details
  const [searchMovie, setSearchMovie] = useState(''); // The search term

  // Fetch the list of movies based on the search term
  const getMoviesRequest = async (searchTerm) => {
    if (!searchTerm) return; // Don't fetch if the search term is empty

    const url = `http://www.omdbapi.com/?s=${searchTerm}&apikey=63996807`;

    try {
      const response = await fetch(url);
      const responseJson = await response.json();

      if (responseJson.Response === "True") {
        setMovies(responseJson.Search); // Update the state with the list of movies
      } else {
        setMovies([]); // Clear the list if no results are found
      }
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  // Fetch the details of a single movie by IMDb ID
  const getMovieDetails = async (imdbID) => {
    const url = `http://www.omdbapi.com/?i=${imdbID}&apikey=63996807`;

    try {
      const response = await fetch(url);
      const responseJson = await response.json();

      if (responseJson.Response === "True") {
        setSelectedMovie(responseJson); // Set the selected movie's details
      } else {
        console.error("Movie details not found.");
      }
    } catch (error) {
      console.error("Error fetching movie details:", error);
    }
  };

  // Fetch movies when the search term changes
  useEffect(() => {
    if (searchMovie) {
      getMoviesRequest(searchMovie); // Fetch movies based on the search term
    }
  }, [searchMovie]);

  return (
    
<div className="container">
  {selectedMovie ? (
   <div class ="center">
<img class="img-size"src={`${selectedMovie.Poster}`}></img>
<div className="movie-card">
   <div className="movie-details card">
     <div className="card-body">
       <h2 className="card-title">{selectedMovie.Title}</h2>
       <p>{selectedMovie.Director}</p>
       <p>{selectedMovie.Year}</p>
       <p><strong>Actors:</strong> {selectedMovie.Actors}</p>
       <p><strong>Genre:</strong> {selectedMovie.Genre}</p>
       <p><strong>IMDB Rating:</strong> {selectedMovie.imdbRating}</p>
       <p><strong>Plot:</strong> {selectedMovie.Plot}</p>
       <button className="btn btn-primary" onClick={() => setSelectedMovie(null)}>
         Back to Search Results
       </button>
     </div>
     </div>
   </div></div>
  ) : (
    <div className="movie-search">
      <div className="row">
        <MovieListnav />
      </div>
      <div className="row">
        <SearchBar value={searchMovie} setSearchMovie={setSearchMovie} />
      </div>
      <div className="row">
        <MovieList movies={movies} onSelectMovie={getMovieDetails} />
      </div>
    </div>
  )}
</div>
  )};



export default App;
