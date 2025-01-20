import React, { useState, useEffect, useRef } from 'react';
import MovieList from './components/movieList';
import SearchBar from './components/searchBar';
import NavigationBar from './components/navbar';
import Home from './components/Home';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [searchMovie, setSearchMovie] = useState('');
  const [showHome, setShowHome] = useState(true);
  const [noMoviesFound, setNoMoviesFound] = useState(false);

  const searchBarRef = useRef(null);
  const apiKey = '1a6503b5d2cab21a032a517aeaeea561'; // Replace with your TMDb API key

  // Fetch movies based on the search term
  const getMoviesRequest = async (searchTerm) => {
    if (!searchTerm) return;

    const url = `https://api.themoviedb.org/3/search/movie?query=${searchTerm}&api_key=${apiKey}`;

    try {
      const response = await fetch(url);
      const responseJson = await response.json();

      if (responseJson.results && responseJson.results.length > 0) {
        setMovies(responseJson.results);
        setNoMoviesFound(false);
      } else {
        setMovies([]);
        setNoMoviesFound(true);
      }
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  };

  // Fetch detailed information for a selected movie
  const getMovieDetails = async (movieId) => {
    const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`;

    try {
      const response = await fetch(url);
      const responseJson = await response.json();
      setSelectedMovie(responseJson);
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
                    <img
                      className="img-size pulse-img"
                      src={`https://image.tmdb.org/t/p/w500${selectedMovie.poster_path}`}
                      alt={selectedMovie.title}
                    />
                    <div className="movie-card slide-in">
                      <div className="movie-details">
                        <div className="card-body">
                          <h2 className="card-title">{selectedMovie.title}</h2>
                          <p className="bold">Director: Not Provided</p>
                          <p className="bold">
                            ★ {selectedMovie.vote_average} | {selectedMovie.runtime} mins
                          </p>
                          <p>
                            <strong>GENRE</strong>
                          </p>
                          <p>{selectedMovie.genres.map((g) => g.name).join(', ')}</p>
                          <p>{selectedMovie.release_date}</p>
                          <p>
                            <strong>SYNOPSIS</strong>
                          </p>
                          <p>{selectedMovie.overview}</p>
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
