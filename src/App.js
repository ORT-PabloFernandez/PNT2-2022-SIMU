import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import Home from "./components/home/index.js";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  let URL = "http://localhost:3000/api/movies?pageSize=15";
  const [movies, setMovies] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  let number = useRef(1);
  useEffect(() => {
    const apiUserUrl = `${URL}&page=${pageNumber}`;
    try {
      setTimeout(() => {
        fetch(apiUserUrl)
          .then((response) => response.json())
          .then(console.log("Enter here"))
          .then((data) => setMovies(data));
      }, 5000);
    } catch (e) {
      console.log("Error fetching the API: ", e);
    }
  }, [pageNumber]);
  return (
    <>
      <Home movies={movies} />
      {movies.length > 0 ? (
        <div className="pagination">
          <Button
            variant={"primary"}
            className="button"
            onClick={() => setPageNumber((number.current -= 1))}
          >
            Atras
          </Button>
          <Button
            variant={"primary"}
            className="button"
            onClick={() => setPageNumber((number.current += 1))}
          >
            Siguiente
          </Button>
        </div>
      ) : null}
    </>
  );
}

export default App;
