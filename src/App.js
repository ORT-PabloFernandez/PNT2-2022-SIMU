import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Movies from "./movie/pages/MoviesList.js";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Movies />} />
      </Routes>
    </Router>
  );
}

export default App;
