import MovieCard from "./components/MovieCard";
import Nav from "./components/Nav";
import axios from "axios"
import "./App.css"
import Chip from "./components/Chip";
import { useState } from "react";


function App() {
  const [search , setSearch] = useState([])
  const [genres ,setGenres] = useState([])

  const baseUrl = "https://api.themoviedb.org/3/search/movie?api_key=f2121ae398da17162f25974795b0c9db"

  const getMovie = async(input) => {
    const fetchMovie = await axios.get(`${baseUrl}&query=${input}`)
    setSearch(fetchMovie.data.results)
  }

  const getGenre = async() => {
    const fetchGenre = await axios.get("https://api.themoviedb.org/3/genre/movie/list?api_key=f2121ae398da17162f25974795b0c9db") 
    setGenres(fetchGenre.data.genres)
  }


  return (
    <div className="App">
    <Nav getMovie={getMovie} />
    <Chip genres={genres} />
    <MovieCard search={search} />
    </div>
  );
}

export default App;
