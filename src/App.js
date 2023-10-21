import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MoviePage from "./components/MoviePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>El mejor portal de películas</h1>} />
        <Route path="/movies" element={<MoviePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
