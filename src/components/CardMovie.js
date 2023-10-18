import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaStar, FaRegHeart, FaHeart } from "react-icons/fa";

const CardMovie = ({ movie, showLink = true }) => {
  const imagePath = "https://image.tmdb.org/t/p/w300";

  const [favoritos, setFavoritos] = useState([]);

  useEffect(() => {
    const storedFavoritos = JSON.parse(localStorage.getItem("favoritos")) || [];
    setFavoritos(storedFavoritos);
  }, []);

  const toggleFavorito = () => {
    if (favoritos.some((fav) => fav.id === movie.id)) {
      const updatedFavoritos = favoritos.filter((fav) => fav.id !== movie.id);
      setFavoritos(updatedFavoritos);
      localStorage.setItem("favoritos", JSON.stringify(updatedFavoritos));
    } else {
      const updatedFavoritos = [...favoritos, movie];
      setFavoritos(updatedFavoritos);
      localStorage.setItem("favoritos", JSON.stringify(updatedFavoritos));
    }
  };

  return (
    <div className="movie">
      <img src={`${imagePath}${movie.poster_path}`} alt={movie.title} />
      <h2>{movie.title}</h2>
      <div className="icons">
        <p id="avaliation">
          <FaStar /> {movie.vote_average}
        </p>
        <button id="favorite" onClick={() => toggleFavorito(movie)}>
          {favoritos.some((fav) => fav.id === movie.id)
            ? <FaHeart />
            : <FaRegHeart />
          }
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
