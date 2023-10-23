import './Pelicula.css';
import Pelicula from './Pelicula';


const Peliculas = (props) =>{

    return(
        <ul className='peliculas-list'>
            {props.Pelis.map(peli => {
                return(
                    <Pelicula
                        id = {peli._id}
                        poster = {peli.poster}
                        title = {peli.title}
                        plot = {peli.plot}
                        genres = {peli.genres}
                        fullplot = {peli.fullplot}
                    />
                
                )
                })}
        </ul>
    )
}

export default Peliculas;