import {useParams} from 'react-router-dom';
import {useState, useEffect} from 'react';
 
const MovieDetails = (props) => {
    const {id} = useParams();
    const [movie, setMovie] = useState({});

    useEffect(()=>{
       fetch("http://localhost:4000/api/movies?pageSize=100&page=1")
            .then(response => response.json())
            .then(data => 
                    setMovie(data.find(movie => movie._id === id))
            )
            .catch(error => console.log(error));
    }, []);

    return (
        <>
            <img src={movie.poster}  />
            <h3>{movie.title}</h3>
           
        </>
    );
};

export default MovieDetails;