import MovieCard from "./components/MovieCard";
import Nav from "./components/Nav";
import axios from "axios"
import "./App.css"
import Chip from "./components/Chip";
import { useEffect, useState } from "react";


function App() {
  const [search , setSearch] = useState([])
  const [genres ,setGenres] = useState([])

  const baseUrl = "https://api.themoviedb.org/3/search/movie?api_key=f2121ae398da17162f25974795b0c9db"

  const getMovie = async(input) => {
    const fetchMovie = await axios.get(`${baseUrl}&query=${input}`)
    setSearch(fetchMovie.data.results)
  }

  const getMovieByGenres = async(movieName) => {
    const fetchGenre = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=f2121ae398da17162f25974795b0c9db&with_genres=${movieName}`)
    setSearch(fetchGenre.data.results)
    console.log(fetchGenre)
  }

  const highestRating = async() => {
    const higestRatingMovie = await axios.get("https://api.themoviedb.org/3/discover/movie?api_key=f2121ae398da17162f25974795b0c9db&sort_by=popularity.desc")
    setSearch(higestRatingMovie.data.results)
  }

  const lowestRating = async() => {
    const lowesRatingMovie = await axios.get("https://api.themoviedb.org/3/discover/movie?api_key=f2121ae398da17162f25974795b0c9db&sort_by=popularity.asc")
    setSearch(lowesRatingMovie.data.results)
  }

  const ascOrderTitle = async() => {
    const asc = await axios.get("https://api.themoviedb.org/3/discover/movie?api_key=f2121ae398da17162f25974795b0c9db&sort_by=original_title.asc")
    setSearch(asc.data.results)
  }

  const descOrderTitle = async() => {
    const desc = await axios.get("https://api.themoviedb.org/3/discover/movie?api_key=f2121ae398da17162f25974795b0c9db&sort_by=original_title.desc")
    setSearch(desc.data.results)
  }

  useEffect(() =>{
     axios.get("https://api.themoviedb.org/3/genre/movie/list?api_key=f2121ae398da17162f25974795b0c9db")
      .then((response) => {
        setGenres(response.data.genres)
        console.log(response.data.genres)
      })  
  },[])

  return (
    <div className="App">
    <Nav getMovie={getMovie} />
    <Chip genres={genres} getMovieByGenres={getMovieByGenres} highestRating={highestRating} lowestRating={lowestRating} ascOrderTitle={ascOrderTitle}
    descOrderTitle={descOrderTitle}
      />
    <MovieCard search={search} />
    </div>
  );
}

export default App;
