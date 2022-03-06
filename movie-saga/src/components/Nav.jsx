import React, { useState } from "react";

export default function Nav(props) {

  const [input , setInput] = useState()

  const changeHandler = (e) => {
    setInput(e.target.value)
  }
  
  return (
    <>
      <nav class="navigation">
        <h3 class="navigation__heading">MovieSaga</h3>
        <ul class="navbar__menu">
          <li class="navbar__link">Home</li>
          <li class="navbar__link">WishList</li>
          <li class="navbar__link">gitHub</li>
        </ul>
        <div class="navbar__search">
          <input onChange={changeHandler} type="search" class="searchbar" />
          <button onClick={()=>props.getMovie(input)} class="navbar__btn">Search</button>
        </div>
      </nav>
    </>
  );
}
