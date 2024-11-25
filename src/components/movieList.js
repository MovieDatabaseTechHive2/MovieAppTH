import React from "react";

const MovieList = ({ movies, onSelectMovie }) => {
  return (
    <div className="row">
      {movies.map((movie) => (
        <div className="col-md-3" key={movie.imdbID}>
          <div className="card">
            <img
              src={movie.Poster}
              alt={movie.Title}
              className="card-img-top"
            />
            <div className="card-body">
              <h5 className="card-title">{movie.Title}</h5>
              <p className="card-text">{movie.Year}</p>
              <button
                className="btn btn-primary"
                onClick={() => onSelectMovie(movie.imdbID)} // Handle movie selection
              >
                View Details
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MovieList;
