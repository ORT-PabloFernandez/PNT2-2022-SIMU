import './Pelicula.css';
import { Link } from "react-router-dom";

const Pelicula = (props) =>{
    return(
        <li className='pelicula-item'>
            <div className='card pelicula-item__content'>
                <Link to={`/peliculas/${props.id}`}>
                    <div className='pelicula-item__image avatar'>
                        <img src={props.poster} />
                    </div>
                    <div className='pelicula-item__info'>
                        <h2>{props.title}</h2>
                        <h3>{props.genres}</h3>
                    </div>
                </Link>
            </div>
        </li>
    );
};

export default Pelicula;