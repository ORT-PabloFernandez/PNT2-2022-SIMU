import React, {useEffect, useState} from 'react';
import Movies from '../components/Movies';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';

export default function AllMovies(){
    const URL = "http://localhost:3001/api/movies?pageSize=12";
    const [movies, setMovies] = useState([]);
    const [page, setPage] = useState(1);

    const handleRightClick = () => {
        setPage(page + 1);
    };

    const handleLeftClick = () => {
        if (page > 1){
            setPage(page - 1);
        }    
    };

    useEffect(() => {
        const pagedUrl = `${URL}&page=${page}`
        fetch(pagedUrl)
            .then(response => response.json())
            .then(data => setMovies(data))
            .catch(error => console.error(error));
    }, [page]);

    return(
    <div>
        <Movies items={movies}/>
        <Stack direction="row" spacing={1} justifyContent = "center">
            <div onClick={handleLeftClick}>
                <IconButton aria-label="Back">
                    <KeyboardArrowLeftIcon fontSize="large" />
                </IconButton>
            </div>
            <div onClick={handleRightClick}>
                <IconButton aria-label="Next">
                    <KeyboardArrowRightIcon fontSize="large" />
                </IconButton>
            </div>
        </Stack>
    </div>
    );
}