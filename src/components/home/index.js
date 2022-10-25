import React from "react";
import "./styles.css";
import Peliculas from "../Peliculas";
const Home = ({ movies }) => {
  return (
    <>
      <div className="App">
        <h1>Peliculas</h1>
      </div>

      <Peliculas movies={movies} />
    </>
  );
};

export default Home;
