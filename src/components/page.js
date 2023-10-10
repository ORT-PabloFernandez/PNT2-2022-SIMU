//import {useParams} from 'react-router-dom';
import {useState, useEffect} from 'react';
 
const PageDetails = () => {
    //const {id} = useParams();
    const [page, setPage] = useState();
    //-GET /api/movies?pageSize=[pageSize]&page=[page]
    //setUser(data.find(user => user["Object Id"] === id))
    useEffect(()=>{
       fetch("https://mflixbackend.azurewebsites.net/api/movies?pagesize=10&page=1")
            .then(response => response.json())
            .then(data => (
                console.log(data),
                    setPage(data.find(e => e._id === '573a1391f29313caabcd71e3')))
            )
            .catch(error => console.log(error));
            console.log('page', page);
    }, []);

    return (
        <>
            {/* {console.log('hola',page)} */}
             <img src={page.poster}  />
            <h2>{page.title}</h2>
            <h3>{page.plot}</h3>         
        </>
    );
};

export default PageDetails;