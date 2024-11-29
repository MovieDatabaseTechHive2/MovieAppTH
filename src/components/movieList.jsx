import React from "react";

const MovieList = ({ movies, onSelectMovie }) => {
  return (
    <div className="row">
      {movies.map((movie) => (
        <div className="col-md-3" key={movie.imdbID}>
          <div className="group">
            <div className="card-box">
              <div id="Hegel" className="b">
                {/* The image container */}
                <div className="thumb">
                
            <img src={movie.Poster} alt="Movie Title" />
           
          
                </div>

                {/* The content to show on hover */}
                <div className="content">
                <div className="detial">
                  <div className="title">
                    <p id="movie-name" className="name">{movie.Title}</p> {/* Movie name */}
                    
                  
                  </div>
                  <p >{movie.Year}</p> {/* Movie name */}

                  <div className="infomation">
                    <p id="release-date" className="propertion">{movie.Released}</p> {/* Release Date */}
                    <p id="movie-type" className="propertion">{movie.Genre}</p> {/* Movie Genre */}
                  </div>
                </div>
              <button
                 className="btn btn-primary"               onClick={() => onSelectMovie(movie.imdbID)} // Handle movie selection
            >
                 View Details
             </button>
                </div>
                
                {/* Movie details to show on hover */}
                
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};


export default MovieList;
