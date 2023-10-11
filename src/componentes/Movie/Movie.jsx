const Movie = (props) => {
  return (
    <li>
      <div>
        <div>
          <img src={props.Picture} />
        </div>
        <div>
          <h2>{props.MovieName}</h2>
          <h3>{props.Description}</h3>
        </div>
      </div>
    </li>
  );
};

export default Movie;
