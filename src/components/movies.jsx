import { Row } from "react-bootstrap";
import Movie from "./movie";

const Movies = (params) => {
  return (
    <Row>
      {params.movies &&
        params.movies.map((movie) => {
          return <Movie key={movie._id} movie={movie} />;
        })}
    </Row>
  );
};

export default Movies;
