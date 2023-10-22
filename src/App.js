import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MoviePage from "./components/MoviePage";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<h1>Sitio de peliculas Netflix!</h1>} />
      <Route path='/api/movies' element={<MoviePage />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
