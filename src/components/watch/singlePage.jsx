import React, { useState, useEffect } from "react";
import "./style.css";
import { useParams } from "react-router-dom";
import { homeData, recommended } from "../../dummyData";
import Upcomming from "../upcoming/Upcomming";

const SinglePage = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    const foundItem = homeData.find((item) => item.id === parseInt(id));
    if (foundItem) {
      setItem(foundItem);
    } else {
      // Handle case where no item is found
      console.error("Item not found");
    }
  }, [id]);

  return (
    <>
      {item ? (
        <>
          <section className="singlePage">
            <div className="singleHeading">
              <h1>{item.name}</h1>
              <span> | {item.time} | </span>
              <span> HD </span>
            </div>
            <div className="container">
              {/* Video player */}
              {item.video && (
                <video src={item.video} controls>
                  Your browser does not support the video tag.
                </video>
              )}
              <div className="para">
                <h3>Date : {item.date}</h3>
                <p>{item.desc || "Description not available."}</p>
                {/* Replace repeated paragraphs with dynamic content if possible */}
                <p>
                  Get access to the direct Project Overview with this report. Just
                  by a quick glance, you’ll have an idea of the total tasks allotted
                  to the team, number of milestones given & completed, total Links
                  created for the project and the total time taken by all the users.
                  Each section would elaborate the data further, if chosen.
                </p>
                {/* Add more relevant or dynamic content here */}
              </div>
              <div className="soical">
                <h3>Share: </h3>
                <img
                  src="https://img.icons8.com/color/48/000000/facebook-new.png"
                  alt="Facebook"
                />
                <img
                  src="https://img.icons8.com/fluency/48/000000/twitter-circled.png"
                  alt="Twitter"
                />
                <img
                  src="https://img.icons8.com/fluency/48/000000/linkedin-circled.png"
                  alt="LinkedIn"
                />
              </div>
            </div>
          </section>
          <Upcomming items={recommended} title="Recommended Movies" />
        </>
      ) : (
        <div>Movie not found</div> // Display a user-friendly message
      )}
    </>
  );
};

export default SinglePage;
