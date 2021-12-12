import React, { Component } from 'react';

export class MovieChild extends Component {
  render() {
    const { key, id, title, year, summary, poster, genres } = this.props;
    return (
      <div className="movie" key={key}>
        <img src={poster} alt={id} />
        <h3 className="movie__title">{title}</h3>
        <h5 className="movie__year">{year}</h5>
        <p className="movie__summary">{summary}</p>
        <b>장르: </b>
        <ul className="movie__genres">
          {genres.map((genre, i) => {
            return (
              <li key={i} className="movie_genre">
                {genre}
              </li>
            );
          })}
        </ul>
        <br />
        <b>summary 요약:</b>
        {summary.slice(0, 350)}
      </div>
    );
  }
}

export default MovieChild;
