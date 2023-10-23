import {useEffect, useState} from 'react';
import Peliculas from './Peliculas';

const PeliculasPage = (props) =>{

    const [pelis, setPelis] = useState([]);

    useEffect(()=>{
        fetch("https://mflixbackend.azurewebsites.net/api/movies?pageSize=10&page=1")
            .then(response => response.json())
            .then(data=> {
                setPelis(data);
            })
            .catch(error => console.log(error));
    })

    return(
        <div>
            <Peliculas Pelis = {pelis}/>
        </div>
    );
};

export default PeliculasPage;