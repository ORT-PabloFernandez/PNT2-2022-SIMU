import React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const Movie = (props) => {
  return (
    <Card sx={{ maxWidth: 500 }} key={props.id}>
      <CardHeader title={props.title} subheader={props.year} />
      <CardMedia
        component="img"
        height="700"
        image={props.poster}
        src={props.image}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {props.fullplot}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Movie;
