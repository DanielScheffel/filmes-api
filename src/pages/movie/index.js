import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { BsFillFileEarmarkTextFill } from "react-icons/bs";
import { FaStar, FaCalendarDay } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";

import "../../styles/pages/movie.sass";

const Movie = () => {
  const { id } = useParams();
  const imagePath = "https://image.tmdb.org/t/p/w300";

  const [movie, setMovie] = useState([]);
  const KEY = process.env.REACT_APP_KEY;
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${KEY}&language=pt-BR`
    )
      .then((response) => response.json())
      .then((data) => {
        const res = data.results;
        let filme = res.find((key) => {
          // eslint-disable-next-line
          return key.id == id;
        });
        setMovie(filme);
      }); // eslint-disable-next-line
  }, []);

  return (
    <div className="movie-page">
      {movie && (
        <>
          <div className="movie_img">
            <img src={`${imagePath}${movie.poster_path}`} alt={movie.title} />
          </div>
          <div className="movie-description">
            <h2>{movie.title}</h2>
            <span>
              <FaCalendarDay /> Data de Lançamento: {movie.release_date}
            </span>
            <p id="star-svg">
              <FaStar id="star" /> {movie.vote_average}
            </p>
            <p>
              <FaPeopleGroup id="popularity" /> Popularidade: {movie.popularity}
            </p>
            <h3>
              <BsFillFileEarmarkTextFill /> Descrição:
            </h3>
            <p id="text">{movie.overview}</p>
            <div className="bottom">
              <Link to="/">
                <button className="btn">Voltar</button>
              </Link>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Movie;
