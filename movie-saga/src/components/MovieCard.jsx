import React from "react";

export default function MovieCard({ search }) {
  return (
    <>
    <div className="movieCard">
      {search.map((movies) => {
        const posterImg =`https://image.tmdb.org/t/p/w200/${movies.poster_path}` 
        return (
          <>
            <div className="card">
              <div className="card__img">
                <span className="card--badge">Premium</span>
                <img
                  src={posterImg}
                  alt="Gate Of India"
                />
              </div>
              <header className="card__heading">{movies.title}</header>
              <p className="card__place">{movies.vote_average}</p>
              <p className="card__desc">
               {movies.overview}
              </p>
              <button className="btn">Add To Watchlist</button>
            </div>
          </>
        );
      })}
      </div>
    </>
  );
}
