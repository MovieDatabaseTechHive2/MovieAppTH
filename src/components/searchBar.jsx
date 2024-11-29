import React from "react";
import '../App.css'
const SearchBar = (props) => {
  return (
    <div className="col col-sm-4 searchBar">
      <input
        className="form-control"
        value={props.value}
        onChange={(event) => props.setSearchMovie(event.target.value)} // Update search term
        placeholder="Type to search"
      />
    </div>
  );
};

export default SearchBar;
