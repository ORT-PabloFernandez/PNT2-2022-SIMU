import React, { useState, useEffect } from "react";
import Peliculas from "./Peliculas";

const url = "http://127.0.0.1:3001/api/movies";

const Paginas = (props) => {
  let truUrl = `${url}?pageSize=[${props.pageSize}]&page=[${props.page}]`;
  const [peliculas, setPeliculas] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(truUrl, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      response.json().then((data) => {
        setPeliculas(data);
      });
    }

    fetchData();
  }, []);

  return <Peliculas peliulasPagina={peliculas}></Peliculas>;
};

export default Paginas;
