import { BrowserRouter, Route, Routes } from "react-router-dom";
import MoviePage from "./componentes/MoviePage/MoviePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MoviePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
