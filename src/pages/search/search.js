import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import CardMovie from "../../components/CardMovie";

const Search = () => {
  const [searchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const query = searchParams.get("q");

  const KEY = process.env.REACT_APP_KEY;
  useEffect(() => {


    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${KEY}&language=pt-BR&query=${query}`
    )
      .then((response) => response.json())
      .then((data) => {
        // console.log(data)
        setMovies(data.results);
      });
  }, [query, KEY]);

  return (
    <div className="container">
      <h2 className="title">
        Resultados para: <span className="query-text">{query}</span>
      </h2>
      <div className="movies-list">
        {movies.length === 0 && <p>Carregando...</p>}
        {movies.length > 0 &&
          movies.map((movie) => <CardMovie key={movie.id} movie={movie} />)}
      </div>
    </div>
  );
};

export default Search;
