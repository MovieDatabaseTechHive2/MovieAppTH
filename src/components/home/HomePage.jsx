import React from "react";
import Homes from "../homes/Homes";  // Ensure this path is correct
import Upcoming from "../upcoming";  // Corrected spelling
import { latest, recommended, upcome } from "../../dummyData";  // Ensure proper export in dummyData


const HomePage = () => {
  return (
    <>
      <Homes />
      <Upcoming items={upcome} title="Upcoming Movies" />
      <Upcoming items={latest} title="Latest Movies" />
      <Upcoming items={recommended} title="Recommended Movies" />
    </>
  );
};

export default HomePage;
