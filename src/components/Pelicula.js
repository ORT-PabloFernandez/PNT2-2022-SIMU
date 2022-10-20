import React from "react";
import Card from "react-bootstrap/Card";
import "./Pelicula.css";

const Pelicula = (props) => {
  return (
    <Card text="dark" style={{ width: "18rem" }}>
      <Card.Header className="cardHeader">
        <div className="pelicula_img img">
          <Card.Img variant="top" src={props.poster} />
        </div>
      </Card.Header>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Subtitle>{props.type}</Card.Subtitle>
        <Card.Text>{props.fullplot}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Pelicula;
