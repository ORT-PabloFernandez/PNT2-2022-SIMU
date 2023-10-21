import MovieList from "./MovieLists";
import { useState, useEffect } from "react";
import "./Page.css";

const MoviePage = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const pageSize = 10;

  useEffect(() => {
    fetch(
      ` https://mflixbackend.azurewebsites.net/api/movies?pageSize=${pageSize}&page=${page}`
    )
      .then((response) => response.json())
      .then((data) => setMovies(data))
      .catch((error) => console.log(error));
  }, [page]);

  return (
    <div>
      <MovieList Movies={movies} />
      <button
        className="page-button"
        onClick={() => setPage(page - 1)}
        disabled={page === 1}
      >
        Página anterior
      </button>
      <button className="page-button" onClick={() => setPage(page + 1)}>
        Página siguiente
      </button>
    </div>
  );
};

export default MoviePage;
