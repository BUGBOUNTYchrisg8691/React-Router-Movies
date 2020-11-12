import React from 'react';
import { useParams, Link } from "react-router-dom";

export default function MovieCard (props) {
  const { movie, stars, saveMovie } = props
  // const params = useParams()

  return (
    stars ? 
      <div className="save-wrapper">
        <div className="movie-card">
          <h2>{movie.title}</h2>
          <div className="movie-director">
            Director: <em>{movie.director}</em>
          </div>
          <div className="movie-metascore">
            Metascore: <strong>{movie.metascore}</strong>
          </div>
          <h3>Actors</h3>

          {movie.stars.map(star => (
            <div key={star} className="movie-star">
              {star}
            </div>
          ))}
        </div>
        <div className="save-button" onClick={ saveMovie }>Save</div>
      </div> :
      <div className="movie-card">
        <h2>{movie.title}</h2>
        <div className="movie-director">
          Director: <em>{movie.director}</em>
        </div>
        <div className="movie-metascore">
          Metascore: <strong>{movie.metascore}</strong>
        </div>
      </div>
  )
}
