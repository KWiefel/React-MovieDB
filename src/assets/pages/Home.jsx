import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import movies from "../data/data";
import "./Home.scss";

// Import MovieDB
import MovieCard from "../components/MovieCard/MovieCard";
import Navbar from "../components/Navbar/Navbar";

const Home = () => {
  // States for movieData and searchInput
  const [movieData, setMovieData] = useState(movies);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    console.log("Änderung");
  }, [movieData]);

  //   functions for sorting the movieData
  const sortingAscending = () => {
    let sortedMovies = [...movieData];
    sortedMovies.sort((a, b) => a.year - b.year);
    setMovieData(sortedMovies);
  };

  const sortingDescending = () => {
    let sortedMovies = [...movieData];
    sortedMovies.sort((a, b) => b.year - a.year);
    setMovieData(sortedMovies);
  };

  const sortingRate = () => {
    let sortedMovies = [...movieData];
    sortedMovies.sort((a, b) => a.rate - b.rate);
    setMovieData(sortedMovies);
  };

  const sortingAtoZ = () => {
    let sortedMovies = [...movieData];

    sortedMovies.sort((a, b) => {
      if (a.title.toLowerCase() < b.title.toLowerCase()) {
        return -1;
      } else {
        return 1;
      }
    });
    setMovieData(sortedMovies);
  };

  const sortingZtoA = () => {
    let sortedMovies = [...movieData];

    sortedMovies.sort((a, b) => {
      if (a.title.toLowerCase() < b.title.toLowerCase()) {
        return 1;
      } else {
        return -1;
      }
    });
    setMovieData(sortedMovies);
  };

  //   functions for searching in the movieData
  const searchMovie = () => {
    let searchedMovies = [...movieData];
    const movieMatch = searchedMovies.filter((singleMovie) => {
      if (singleMovie.title.toLowerCase().includes(searchInput.toLowerCase())) {
        return singleMovie;
      }
    });
    setMovieData(movieMatch);
    setSearchInput("");
  };

  //   functions for reset the movieData
  const reset = () => {
    setMovieData(movies);
  };

  return (
    <>
      <header>
        <Navbar
          sortingAscending={sortingAscending}
          sortingDescending={sortingDescending}
          sortingRate={sortingRate}
          sortingAtoZ={sortingAtoZ}
          sortingZtoA={sortingZtoA}
          searchMovie={searchMovie}
          reset={reset}
          searchInput={searchInput}
          setSearchInput={setSearchInput}
        />
      </header>
      <main>
        <section className="output">
          {/* Mapping Data into MovieCard Component */}
          {movieData.map((movie) => {
            return (
              <MovieCard
                key={uuidv4()}
                title={movie.title}
                year={movie.year}
                director={movie.director}
                duration={movie.duration}
                rate={movie.rate}
                genre={movie.genre}
              />
            );
          })}
        </section>
      </main>
    </>
  );
};

export default Home;
