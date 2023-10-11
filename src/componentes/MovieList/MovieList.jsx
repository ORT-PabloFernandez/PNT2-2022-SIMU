import React from "react";
import Movie from "../Movie/Movie";

const MovieList = (props) => {
  return (
    <ul>
      {props.MovieList.map((movie) => {
        return (
          <Movie
            Id={movie["_id"]}
            Picture={movie.poster}
            MovieName={movie.title}
            Description={movie.fullplot}
          />
        );
      })}
    </ul>
  );
};

export default MovieList;
