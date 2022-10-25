import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./styles.css";

const Pelicula = ({ movie }) => {
  return (
    <>
      <Card style={{ width: "18rem", margin: "2px" }}>
        <Card.Img
          variant="top"
          src={
            movie.poster ? movie.poster : require("../defaultImg/pochoclos.jpg")
          }
          className="img"
        />
        <Card.Body>
          <Card.Title>{movie.title}</Card.Title>
          <Card.Text>
            {movie.plot ? movie.plot : "This movie has not plot info"}
          </Card.Text>
          <div className="button">
            <Button variant="primary">Details</Button>
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

export default Pelicula;
