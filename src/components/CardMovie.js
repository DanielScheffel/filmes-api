import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaStar, FaHeart, FaRegHeart } from "react-icons/fa";

const CardMovie = ({ movie, showLink = true }) => {
  const imagePath = "https://image.tmdb.org/t/p/w300";

  const isFavorito = localStorage.getItem(`favorito_${movie.id}`);

  const [isInFavorito, setIsInFavorito] = useState(isFavorito);

  const toggleFavorito = () => {
    if(isInFavorito){
      localStorage.removeItem(`favorito_${movie.id}`);
      setIsInFavorito(false)
    } else {
      localStorage.setItem(`favorito_${movie.id}`, JSON.stringify(movie));
      setIsInFavorito(true)
    }
  }

  return (
    <div className="movie">
      <img src={`${imagePath}${movie.poster_path}`} alt={movie.title} />
      <h2>{movie.title}</h2>
      <div className="icons">
        <p id="avaliation">
          <FaStar /> {movie.vote_average}
        </p>
        <button id="favorite" onClick={toggleFavorito}>
          {isInFavorito ? <FaHeart /> : <FaRegHeart />}
        </button>
      </div>
      <div className="buttom">
        {showLink && (
          <Link to={`/filme/${movie.id}`}>
            <button className="btn-detalhes">Detalhes</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default CardMovie;
