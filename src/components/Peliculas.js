import React from "react";
import CardGroup from "react-bootstrap/CardGroup";
import Pelicula from "./Pelucla";

const Peliculas = (props) => {
  return (
    <CardGroup>
      {props.map((pelicula) => (
        <Pelicula
          poster={pelicula.poster}
          title={pelicula.title}
          fullplot={pelicula.fullplot}
        ></Pelicula>
      ))}
    </CardGroup>
  );
};

export default Peliculas;
