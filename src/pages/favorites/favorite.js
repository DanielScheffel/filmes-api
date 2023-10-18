import React from "react";
import CardMovie from "../../components/CardMovie";

import "../../styles/pages/favorite.sass";

const favorite = ({ favoritos }) => {
  return (
    <div className="container">
      <h2 className="title">Meus Favoritos</h2>
      <div className="movies-list">
        {Array.isArray(favoritos) && favoritos.length === 0 && (
          <p>Carregando...</p>
        )}
        {Array.isArray(favoritos) &&
          favoritos.length > 0 &&
          favoritos.map((movie) => <CardMovie key={movie.id} movie={movie} />)}
      </div>
    </div>
  );
};

export default favorite;
