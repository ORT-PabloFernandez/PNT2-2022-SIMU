import Movie from "./Movie";

const MovieList = (props) => {
  return (
    <ul>
      {props.Movies.map((movie) => {
        return (
          <Movie
            Key={movie._id}
            Poster={movie.poster}
            Title={movie.title}
            Description={movie.fullplot}
          />
        );
      })}
    </ul>
  );
};

export default MovieList;

//El componente de pelicula debe mostrar la pelicula con su respectivo **poster**, con el **title** debajo y la descripción **fullplot**
