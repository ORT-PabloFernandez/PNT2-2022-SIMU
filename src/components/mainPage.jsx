import { Col, Container, Row, Spinner } from "react-bootstrap";
import Movies from "./movies";
import Paginator from "./paginator";
import { useEffect, useState } from "react";
import ApiClient from "../apiClient/apiClient";

import style from "./style.css";

const MainPage = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    ApiClient.getMoviesPaginated(0).then((response) => {
      setMovies(response.data);
      setLoading(false);
    });
  }, []);

  const handlePageChange = (pageNumber) => {
    setLoading(true);
    ApiClient.getMoviesPaginated(pageNumber).then((response) => {
      setMovies(response.data);
      setLoading(false);
    });
  };

  return (
    <Container>
      <h1>Movies</h1>
      {!loading ? (
        <Movies movies={movies} />
      ) : (
        <Row className="justify-content-md-center">
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </Row>
      )}
      <Row className="justify-content-md-center">
        <Col md="auto">
          <div className="paginator">
            <Paginator handlePageChange={handlePageChange} />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default MainPage;
