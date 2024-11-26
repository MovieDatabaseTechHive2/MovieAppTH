import React from "react";

const MovieList = (props) => {
    
    return(
<>
{props.movies.map((movie, index) => <div key={movie.imdbID}>
    <img src={movie.Poster} alt="movie image"></img>
    <h1>{movie.Title}</h1>
    </div>
    )
    }
</>
 
    )
     
}

export default MovieList;