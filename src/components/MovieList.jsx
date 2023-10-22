import Movie from "./Movie";

const MovieList = (props) => {
    return(
        <ul>
            {props.Movies.map((movie => {
                return (
                    <Movie
                    key={movie.key}
                    Poster={movie.poster}
                    Title={movie.title}
                    Description={movie.plot}
                    />
                );
            }))}
        </ul>
    );
};

export default MovieList;