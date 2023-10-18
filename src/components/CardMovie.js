import React from "react";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";

const CardMovie = ({ movie, showLink = true }) => {
  const imagePath = "https://image.tmdb.org/t/p/w300";

  return (
    <div className="movie">
      <img src={`${imagePath}${movie.poster_path}`} alt={movie.title} />
      <h2>{movie.title}</h2>
      <div className="icons">
        <p id="avaliation">
          <FaStar /> {movie.vote_average}
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
