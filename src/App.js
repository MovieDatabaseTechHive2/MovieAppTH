import React, { useState, useEffect } from 'react';
import MovieList from './components/movieList'; // if it's in a 'components' folder
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MovieListnav from './components/movieListnav';
import SearchBar from './components/searchBar';
import MovieSlideshow from "./components/MovieSlideshow";

function App() {
  const [movies, setMovies] = useState([]);
  const [searchMovie, setSearchMovie] = useState('');

  // Function to fetch movies from OMDB API
  const getMoviesRequest = async (searchTerm) => {
    if (!searchTerm) return; // Don't fetch if search term is empty
    
    const url = `http://www.omdbapi.com/?s=${searchTerm}&apikey=63996807`;

    try {
      const response = await fetch(url);
      const responseJson = await response.json();

      if (responseJson.Response === "True") {
        setMovies(responseJson.Search); // Update movies state if search is successful
      } else {
        setMovies([]); // Clear movies if no results found
      }
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  // Fetch movies when the search term changes
  useEffect(() => {
    if (searchMovie) {
      getMoviesRequest(searchMovie); // Fetch movies based on the search term
    }
  }, [searchMovie]); // Dependency on searchMovie

  return (
    <div className='container-fluid'>
      <div className="row">
        <MovieListnav />
      </div>
      <SearchBar 
        value={searchMovie}            // Bind the search input to the searchMovie state
        setSearchMovie={setSearchMovie} // Pass the setSearchMovie function to update searchMovie state
      />
      <div className="row">
        <MovieList movies={movies} />   {/* Render MovieList component */}
      </div>
    </div>
  );
}

export default App;
