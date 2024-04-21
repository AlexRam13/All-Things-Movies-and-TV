import { useEffect, useState } from "react";
import axios from "axios";
import MovieCard from "./MovieCard";
import Masonry from "react-masonry-css";
import "./App.css";

const App = () => {
  const [movies, setMovies] = useState([]);

  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    820: 3,
    700: 2,
    500: 1,
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://www.omdbapi.com/?apikey=72936f33&s=avengers&type=movie`
        );
        setMovies(response.data.Search);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <h1>All Things Movies and TV</h1>
      <div className="grid-container">
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {movies.map((movie, index) => (
            <MovieCard key={index} movie={movie} />
          ))}
        </Masonry>
      </div>
    </div>
  );
};

export default App;
