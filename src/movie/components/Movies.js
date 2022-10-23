import React from 'react';
import Movie from './Movie';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

export default function Movies(props){
    return(
        <div>
            <Typography variant="h1" textAlign="center" color="#1C143A" fontFamily="cursive">
                Movie Catalog
            </Typography>
            <Box 
                display="flex"
                justifyContent="center"
                alignItems="center"
                minHeight="100vh"
                marginLeft="10%"
                marginRight="10%"
            >
                <Grid container spacing={2}>
                    {props.items.map(movie => {
                        return(
                        <Grid item xs={3}>
                            <Movie title={movie.title} poster={movie.poster} fullplot = {(movie.fullplot) ? movie.fullplot : movie.plot}/>
                        </Grid>
                        );
                    })}
                </Grid>
            </Box>
        </div>
        );

}