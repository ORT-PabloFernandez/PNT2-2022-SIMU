import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PeliculasPage from './components/Peliculas/PeliculasPage';
import PeliculaDetails from './components/Peliculas/PeliculaDetails';
import Pelicula from './components/Peliculas/Pelicula';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/peliculas" element={<PeliculasPage/>}/>
        <Route path="/peliculas/:id" element={<PeliculaDetails/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
