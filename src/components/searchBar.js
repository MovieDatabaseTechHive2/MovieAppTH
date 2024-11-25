import React from "react";

const SearchBar = (props) => {
  return (
    <div className="col col-sm-4">
      <input
        className="form-control"
        value={props.value}  // Bind the input value to the searchMovie state
        onChange={(event) => props.setSearchMovie(event.target.value)} // Update searchMovie state on change
        placeholder="Type to search" // Placeholder text
      />
    </div>
  );
};

export default SearchBar;
