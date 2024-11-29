import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { homeData } from "../../dummyData"; // Import static data

const HomeCard = ({ item: { id, cover, name, rating, time, desc, starring, genres, tags, video } }) => {
  const [movieData, setMovieData] = useState(null);

  useEffect(() => {
    const fetchMovieData = async () => {
      try {
        // Replace with your actual API URL
        const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=YOUR_API_KEY`);
        const data = await response.json();
        setMovieData(data); // Update state with the API response
      } catch (error) {
        console.error("Error fetching movie data:", error);
        // In case of an error, fallback to static data
        setMovieData(homeData.find(item => item.id === id)); 
      }
    };

    fetchMovieData();
  }, [id]);

  if (!movieData) {
    return <div>Loading...</div>; // Show loading until API data is fetched or fallback is used
  }

  return (
    <>
      <div className="box">
        <div className="coverImage">
          <img src={cover || movieData.poster_path} alt="" />
        </div>
        <div className="content flex">
          <div className="details row">
            <h1>{name || movieData.title}</h1>
            <div className="rating flex">
              <div className="rate">
                <i className="fas fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star-half"></i>
              </div>
              <label>{rating || movieData.vote_average} (IMDb)</label>
              <span>GP</span>
              <label>{time}</label>
            </div>
            <p>{desc || movieData.overview}</p>
            <div className="cast">
              <h4>
                <span>Starring </span>
                {starring || "N/A"}
              </h4>
              <h4>
                <span>Genres </span>
                {genres || "N/A"}
              </h4>
              <h4>
                <span>Tags </span>
                {tags || "N/A"}
              </h4>
            </div>
            
          </div>
          <div className="playButton row">
            <Link to={`/singlepage/${id}`}>
              <button>
                <div className="img"></div>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeCard;
