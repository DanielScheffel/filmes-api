import React from 'react'
import CardMovie from '../../components/CardMovie';

const favoritos = () => {

    const favoritosMovies = Object.keys(localStorage)
    .filter(key => key.startsWith('favorito_'))
    .map(key => JSON.parse(localStorage.getItem(key)));

    const numeroDeMovies = favoritosMovies.length;

  return (
    <div className="container">
        <h2 className="title">Meus Favoritos: {numeroDeMovies}</h2>
        <div className="movies-list">
            {favoritosMovies.length > 0 ? (
                favoritosMovies.map((movie) => <CardMovie key={movie.id} movie={movie} />)
            ) : (
                <p>Nenhum filme favorito encontrado.</p>
            )}
        </div>  
    </div>
  )
}

export default favoritos