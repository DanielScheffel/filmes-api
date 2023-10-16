import React from "react";
import { Link } from "react-router-dom";
import { FaStar, FaRegHeart } from "react-icons/fa";
import { useFavoriteContext } from "../contexts/Favorites";

const CardMovie = ({ movie, showLink = true }) => {
  const imagePath = "https://image.tmdb.org/t/p/w300";

  const {favorite, addFavorite} = useFavoriteContext();

  return (
    <div className="movie">
      <img src={`${imagePath}${movie.poster_path}`} alt={movie.title} />
      <h2>{movie.title}</h2>
      <div className="icons">
        <p id="avaliation">
          <FaStar /> {movie.vote_average}
        </p>
        <p id="favorite">
          <FaRegHeart onClick={() => addFavorite(movie.id)} />
        </p>
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
