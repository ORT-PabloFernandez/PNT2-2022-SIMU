import { Button, Card, Image, Modal } from "react-bootstrap";
import { useState } from "react";

const Movie = (params) => {
  const [openModal, setOpenModal] = useState(false);

  const handleCloseModal = () => {
    setOpenModal(false);
  };
  return (
    <>
      <Card className="movieCard">
        <Card.Img variant="top" src={params.movie.poster} />
        <Card.Body>
          <Card.Title>{params.movie.title}</Card.Title>
          <Card.Text className="movieText">{params.movie.fullplot}</Card.Text>
          <Button variant="primary" onClick={() => setOpenModal(true)}>
            Ver más información
          </Button>
        </Card.Body>
      </Card>

      <Modal show={openModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>{params.movie.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Image src={params.movie.poster} className="modalImage" />
          <p>{params.movie.fullplot}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Movie;
