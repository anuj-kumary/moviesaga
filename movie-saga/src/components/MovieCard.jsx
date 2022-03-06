import React from "react";

export default function MovieCard() {
  return (
    <>
      <div className="card">
        <div className="card__img">
          <span className="card--badge">Premium</span>
          <img src="https://cdn.theculturetrip.com/wp-content/uploads/2015/11/16663771787_b69fecf577_h.jpg" alt="Gate Of India" />
        </div>
        <header className="card__heading">MovieName</header>
        <p className="card__place">Rating</p>
        <p className="card__desc">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta quod aperiam nihil dolor quidem fugiat voluptates, earum asperiores adipisci exercitationem hic in repellendus voluptatum tempore expedita aut similique numquam quam?
        </p>
       <button className="btn">Add To Watchlist</button>
      </div>
    </>
  );
}
