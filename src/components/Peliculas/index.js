import React from "react";
import Pelicula from "../Pelicula";
import "./styles.css";

const Peliculas = ({ movies }) => {
  return (
    <>
      <div>
        <h1>Nuestras Peliculas</h1>
        <div className="container">
          {movies.map((m, index) => (
            <Pelicula movie={m} key={index} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Peliculas;
