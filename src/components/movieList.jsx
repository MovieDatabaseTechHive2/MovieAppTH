import React from "react";

const MovieList = ({ movies, onSelectMovie }) => {
  return (
    <div className="row">
      {movies.map((movie) => (
        <div className="col-md-3" key={movie.id}> {/* Use TMDb's movie ID */}
          <div className="group">
            <div className="card-box">
              <div id="Hegel" className="b">
                {/* The image container */}
                <div className="thumb">
                  <img
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} // TMDb poster image URL
                    alt={movie.title}
                  />
                </div>

                {/* The content to show on hover */}
                <div className="content">
                  <div className="detial">
                    <div className="title">
                      <p id="movie-name" className="name">{movie.title}</p> {/* Movie title */}
                    </div>
                    <p>{movie.release_date?.split("-")[0]}</p> {/* Movie year */}

                    <div className="infomation">
                      <p id="release-date" className="propertion">
                        {movie.release_date} {/* Release date */}
                      </p>
                      <p id="movie-type" className="propertion">
                        {movie.genre_ids.join(", ")} {/* Genre */}
                      </p>
                    </div>
                  </div>
                  <button
                    className="btn btn-primary"
                    onClick={() => onSelectMovie(movie.id)} // Handle movie selection
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MovieList;
