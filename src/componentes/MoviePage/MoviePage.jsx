import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import MovieList from "../MovieList/MovieList";

const MoviePage = () => {
  const [movieData, setMovieData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const moviesToShow = movieData.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(movieData.length / itemsPerPage);

  useEffect(() => {
    // Función para obtener datos de cervezas utilizando el token
    const handleGetMovies = async () => {
      const requestOptions = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      };

      try {
        const response = await fetch(
          "http://localhost:4000/api/movies?pageSize=100&page=1",
          requestOptions
        );

        if (response.ok) {
          const data = await response.json();
          setMovieData(data); // aca almacenamos los datos de las movies
          //console.log(data);
        } else {
          console.error("Error al obtener datos de peliculas");
        }
      } catch (error) {
        console.error("Error al obtener datos de las peliculas", error);
      }
    };

    // Llama a la función para obtener datos de peliculas
    handleGetMovies();
  }, []);

  return (
    <div>
      <h1>Netflix Giorgio</h1>
      <h3>TU MEJOR SITIO</h3>

      <MovieList MovieList={moviesToShow} />

      <div className="pagination">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => setCurrentPage(index + 1)}
            className={currentPage === index + 1 ? "active" : ""}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default MoviePage;
