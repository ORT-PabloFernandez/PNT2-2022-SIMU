import { BrowserRouter, Route, Routes } from "react-router-dom";

import MoviesPage from "./components/Movie/MoviePage";
import MovieDetails from "./components/Movie/MovieDetails";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<h1>Home</h1>} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:id" element = { <MovieDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
export default App;
