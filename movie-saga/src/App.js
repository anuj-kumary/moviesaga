import MovieCard from "./components/MovieCard";
import Nav from "./components/Nav";
import "./App.css"
import Chip from "./components/Chip";


function App() {
  return (
    <div className="App">
    <Nav />
    <Chip />
    <MovieCard />
    </div>
  );
}

export default App;
