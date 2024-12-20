import React, { useState, useEffect, useRef } from 'react';
import MovieList from './components/movieList';
import SearchBar from './components/searchBar';
import NavigationBar from './components/navbar';
import Home from './components/home';
import { CSSTransition, TransitionGroup } from 'react-transition-group'; // Importing react-transition-group
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [searchMovie, setSearchMovie] = useState('');
  const [showHome, setShowHome] = useState(true);
  const [noMoviesFound, setNoMoviesFound] = useState(false);

  const searchBarRef = useRef(null);

  const getMoviesRequest = async (searchTerm) => {
    if (!searchTerm) return;

    const url = `http://www.omdbapi.com/?s=${searchTerm}&apikey=63996807`;

    try {
      const response = await fetch(url);
      const responseJson = await response.json();

      if (responseJson.Response === 'True') {
        setMovies(responseJson.Search);
        setNoMoviesFound(false);
      } else {
        setMovies([]);
        setNoMoviesFound(true);
      }
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  };

  const getMovieDetails = async (imdbID) => {
    const url = `http://www.omdbapi.com/?i=${imdbID}&apikey=63996807`;

    try {
      const response = await fetch(url);
      const responseJson = await response.json();

      if (responseJson.Response === 'True') {
        setSelectedMovie(responseJson);
      } else {
        console.error('Movie details not found.');
      }
    } catch (error) {
      console.error('Error fetching movie details:', error);
    }
  };

  useEffect(() => {
    if (searchMovie) {
      getMoviesRequest(searchMovie);
    }
  }, [searchMovie]);

  const navigateHome = () => {
    setShowHome(true);
    setSelectedMovie(null);
  };

  const navigateMovies = () => {
    setShowHome(false);
    searchBarRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="d-flex flex-column min-vh-100 whitefont">
     
      {!selectedMovie && <NavigationBar navigateHome={navigateHome} navigateMovies={navigateMovies} />}

      <div className="container bg flex-grow-1">
        <TransitionGroup component={null}>
         
          <CSSTransition
            key={selectedMovie ? 'selected' : showHome ? 'home' : 'search'}
            timeout={300}
            classNames="fade"
            unmountOnExit
          >
            <div>
              {selectedMovie ? (
                <div className="transition fade-in">
                  <div className="flex-center">
                    <img className="img-size pulse-img" src={`${selectedMovie.Poster}`} alt={selectedMovie.Title} />
                    <div className="movie-card slide-in">
                      <div className="movie-details">
                        <div className="card-body">
                          <h2 className="card-title">{selectedMovie.Title}</h2>
                          <p className="bold">{selectedMovie.Director}</p>
                          <p className="bold">
                            ★ {selectedMovie.imdbRating} | {selectedMovie.Runtime}
                          </p>
                          <p>
                            <strong>GENRE</strong>
                          </p>
                          <p>{selectedMovie.Genre}</p>
                          <p>{selectedMovie.Year}</p>
                          <p>
                            <strong>SYNOPSIS</strong>
                          </p>
                          <p>{selectedMovie.Plot}</p>
                          <p>
                            <strong>ACTORS</strong>
                          </p>
                          <p className="blue-font">{selectedMovie.Actors}</p>
                          <button
                            className="btn btn-primary bounce-btn"
                            onClick={() => setSelectedMovie(null)}
                          >
                            Back to Search Results
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : showHome ? (
                <div className="transition fade-in">
                  <Home setShowHome={setShowHome} />
                </div>
              ) : (
                <div className="transition fade-in ">
                  <div ref={searchBarRef} className="row searchBar">
                    <SearchBar value={searchMovie} setSearchMovie={setSearchMovie} />
                  </div>
                  <div className="row">
                    {noMoviesFound ? (
                      <div className="large-Font" role="alert">
                        No movies found. Please try another search term.
                      </div>
                    ) : (
                      <div className="row mt-3">
                        <p className="large-Font">
                          🎥 Discover Your Next Favorite Movie! Type in the name of a movie to explore the magic of cinema. 🌟
                          <br />
                          What are you in the mood for today? 🍿🎬
                        </p>
                        <MovieList movies={movies} onSelectMovie={getMovieDetails} />
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </CSSTransition>
        </TransitionGroup>
      </div>

      <footer className="bg-dark text-light py-3 text-center mt-auto footer-appear">
        <p>© 2024 Movie Explorer. All rights reserved. Created by Tech Hivies Movie Studio.</p>
      </footer>
    </div>
  );
}

export default App;
