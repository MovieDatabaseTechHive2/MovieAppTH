import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { homeData } from "../../dummyData"; // Import static data

const HomeCard = ({ item: { id, cover, name, rating, time, desc, starring, genres, tags } }) => {
  const [movieData, setMovieData] = useState(null);

  useEffect(() => {
    const fetchMovieData = async () => {
      try {
        // Replace with your actual API URL
        const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=YOUR_API_KEY`);
        if (!response.ok) {
          throw new Error("Failed to fetch movie data");
        }
        const data = await response.json();
        setMovieData(data); // Update state with the API response
      } catch (error) {
        console.error("Error fetching movie data:", error);
        // Fallback to static data
        setMovieData(homeData.find((item) => item.id === id) || {});
      }
    };

    fetchMovieData();
  }, [id]);

  if (!movieData) {
    return <div>Loading...</div>; // Show loading spinner or placeholder
  }

  return (
    <div className="box">
      <div className="coverImage">
        <img src={cover || `https://image.tmdb.org/t/p/w500${movieData.poster_path}`} alt={name || movieData.title} />
      </div>
      <div className="content flex">
        <div className="details row">
          <h1>{name || movieData.title}</h1>
          <div className="rating flex">
            <div className="rate">
              {[...Array(5)].map((_, i) => (
                <i
                  key={i}
                  className={i < Math.floor(rating || movieData.vote_average / 2) ? "fa fa-star" : "fa fa-star-half"}
                ></i>
              ))}
            </div>
            <label>{rating || movieData.vote_average} (IMDb)</label>
            <span>GP</span>
            <label>{time || "N/A"}</label>
          </div>
          <p>{desc || movieData.overview || "No description available."}</p>
          <div className="cast">
            <h4>
              <span>Starring: </span>
              {starring || "N/A"}
            </h4>
            <h4>
              <span>Genres: </span>
              {genres || movieData.genres?.map((g) => g.name).join(", ") || "N/A"}
            </h4>
            <h4>
              <span>Tags: </span>
              {tags || "N/A"}
            </h4>
          </div>
          <button className="primary-btn">
            <i className="fas fa-play"></i> PLAY NOW
          </button>
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
  );
};

export default HomeCard;
