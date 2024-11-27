import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Slider from 'react-slick';
import '../MovieSlideshow.css'; // Your custom styles
import 'slick-carousel/slick/slick.css'; // Slick carousel styles
import 'slick-carousel/slick/slick-theme.css'; // Slick theme styles

const MovieSlideshow = () => {
  const [movies, setMovies] = useState([]); // State to store the movie data

  useEffect(() => {
    // Fetch data from OMDB API when the component mounts
    axios.get('http://www.omdbapi.com/?apikey=63996807&s=movie&plot=short')
      .then(response => {
        setMovies(response.data.Search); // Set the fetched movies to the state
      })
      .catch(error => {
        console.log('Error fetching data: ', error); // Handle any errors
      });
  }, []); 
  // Slick carousel settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="movie-slideshow">
      <Slider {...settings}>
        {/* Check if movies array has data */}
        {movies.length > 0 ? (
          movies.map((movie, index) => (
            <div key={index}>
              {/* Render each movie's image */}
              <img
                src={movie.Poster !== "N/A" ? movie.Poster : 'default-image-url.jpg'} 
                alt={movie.Title} 
                className="movie-image"
              />
            </div>
          ))
        ) : (
          <p>Loading movies...</p> // Display loading message if movies are not loaded
        )}
      </Slider>
    </div>
  );
};

export default MovieSlideshow;
