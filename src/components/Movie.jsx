const Movie = (props) => {
    return (
        <li>
            <div>
                <img src = {props.Poster} alt={props.Title} />
                <h2>{props.Title}</h2>
                <h3>{props.Description}</h3>
            </div>
        </li>
    );
};

export default Movie;