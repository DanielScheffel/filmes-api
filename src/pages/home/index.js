import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";

import CardMovie from "../../components/CardMovie";

import "../../styles/pages/index.sass";

function Home() {
  const [movies, setMovies] = useState([]);
  const KEY = process.env.REACT_APP_KEY;
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${KEY}&language=pt-BR`
    )
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.results);
      });
  }, [KEY]);

  return (
    <div className="container">
      <h2 className="title">Movies:</h2>
      <div className="movies-list">
        {movies.length === 0 && <p>Carregando...</p>}
        {movies.length > 0 &&
          movies.map((movie) => <CardMovie key={movie.id} movie={movie} />)}
      </div>
    </div>
  );
}

export default Home;
