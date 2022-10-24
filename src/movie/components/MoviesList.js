import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import Movie from "./Movie";
import AppPagination from "./AppPagination";

const MoviesList = (props) => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [numberOfPages, setNumberOfPages] = useState(1);
  const url = "http://127.0.0.1:3001/api/movies?pageSize=50&page=" + `${page}`;

  async function fetchData() {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    response.json().then((data) => {
      setMovies(data);
      setNumberOfPages(100);
      console.log(numberOfPages);
    });
  }

  useEffect(() => {
    fetchData();
  }, [page]);

  return (
    <>
      <AppPagination setPage={setPage} pageNumber={numberOfPages} />
      <Box
        sx={{
          display: "grid",
          columnGap: 2,
          rowGap: 4,
          gridTemplateColumns: "repeat(4, 1fr)",
        }}
      >
        {movies.map((movie) => (
          <Movie
            title={movie.title}
            year={movie.year}
            image={movie.poster}
            fullplot={movie.plot}
            key={movie._id}
            sx={{ display: "inline" }}
          ></Movie>
        ))}
      </Box>
      <AppPagination setPage={setPage} page={page} />
    </>
  );
};

export default MoviesList;
