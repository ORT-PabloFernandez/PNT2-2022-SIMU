import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";


const PeliculaDetails = (props) =>{
    const {id} = useParams();
    const [peli, setPeli] = useState({});

    useEffect(()=>{
        fetch("https://mflixbackend.azurewebsites.net/api/movies?pageSize=10&page=1")
            .then(response => response.json())
            .then(data=> 
                setPeli(data.find(peli => peli._id === id))
            )
            .catch(error => console.log(error));
    })

    return(
         <>
             <img src={peli.poster} />
             <h1> {peli.title}</h1>
             <h3>Genre: {peli.genres}</h3>
             <h3>{peli.fullplot}</h3>
         </>
        
    );
};

export default PeliculaDetails;