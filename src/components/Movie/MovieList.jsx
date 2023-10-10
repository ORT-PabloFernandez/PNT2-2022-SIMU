import { Link } from 'react-router-dom';
export default function MovieList(props) {
  return (
    <ul className="users-list">
      {props.Movies.map((movie) => {
        return (
          <div>
            <img src={movie.poster} alt={movie.title} />
            <h4>{movie.title}</h4>
            <p>{movie.fullplot}</p>
            <Link to={`/movies/${movie._id}`}>ver detalles</Link>
          </div>
        );
      })}
    </ul>
  );
}
