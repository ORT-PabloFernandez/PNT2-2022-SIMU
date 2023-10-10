import MovieList from "./MovieList";
import { useState, useEffect } from "react";

const MoviePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // Esto se llama la primera vez que carga el componente.
    fetch("http://localhost:4000/api/movies?pageSize=100&page=1")
      .then((response) => response.json())
      .then((data) => {
        setMovies(data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <MovieList Movies={movies} />
    </div>
  );
};

export default MoviePage;
