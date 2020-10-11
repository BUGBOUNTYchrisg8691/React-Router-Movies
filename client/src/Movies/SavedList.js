import React from 'react';
import { Link, useHistory } from "react-router-dom"

export default function SavedList(props) {
  const history = useHistory()

  return (
    <div className="saved-list">
      <h3>Saved Movies:</h3>
      {props.list.map(movie => (
        <Link key={ movie.id } to={`/movies/${movie.id}`} >
          <span className="saved-movie">{movie.title}</span>
        </Link>
      ))}
      <div className="home-button" onClick={() => history.push("/")}>Home</div>
    </div>
  );
}
