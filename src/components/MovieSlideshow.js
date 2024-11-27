import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Slider from 'react-slick';
import '../MovieSlideshow.css'; // Your custom styles
import 'slick-carousel/slick/slick.css'; // Slick carousel styles
import 'slick-carousel/slick/slick-theme.css'; // Slick theme styles

const MovieSlideshow = () => {
  const [movies, setMovies] = useState([]); // State to store the movie data
  const [searchQuery, setSearchQuery] = useState(''); // State to track the search input

  // Fetch movies from API when the search query changes
  useEffect(() => {
    if (searchQuery === '') {
      // Fetch now-playing movies if search query is empty
      axios.get('https://api.themoviedb.org/3/movie/now_playing?api_key=3de4244200cc5701ced29f0aa26574b4&language=en-US&page=1')
        .then(response => {
          setMovies(response.data.results); // Set the fetched movies to the state
        })
        .catch(error => {
          console.log('Error fetching data: ', error); // Handle any errors
        });
    } else {
      // Fetch search results if search query is not empty
      console.log("hi")
    }
  }, [searchQuery]); // Dependency array: fetch when searchQuery changes

  // Handle search input change
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value); // Update the search query state
  };

  // Slick carousel settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Enable auto-scrolling
    autoplaySpeed: 3000, // Auto-scroll speed (3 seconds)
    fade: true, // Optional fade transition for smoother effect
  };

  return (
    <div className="movie-slideshow">
      {/* Search bar */}
      <input
        type="text"
        value={searchQuery}
        onChange={handleSearchChange}
        placeholder="Search movies..."
        className="search-bar"
      />

      {/* Conditionally render the slideshow */}
      {searchQuery === '' || movies.length > 0 ? (
        <Slider {...settings}>
          {/* Check if movies array has data */}
          {movies.length > 0 ? (
            movies.map((movie, index) => (
              <div key={index} className="movie-slide">
                <div className="movie-image-container">
                  {/* Render each movie's image */}
                  <img
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                    className="movie-image"
                  />
                </div>
                {/* Movie title and additional information */}
                <div className="movie-info">
                  <h2 className="movie-title">{movie.title}</h2>
                  <p className="movie-release-date">Released: {movie.release_date}</p>
                  <p className="movie-overview">{movie.overview}</p>
                </div>
              </div>
            ))
          ) : (
            <p>No movies found...</p> // Display a message when no movies are found
          )}
        </Slider>
      ) : (
        <p>Loading movies...</p> // Display loading message while fetching search results
      )}
    </div>
  );
};

export default MovieSlideshow;
