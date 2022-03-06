import React from "react";

export default function Nav() {
  return (
    <>
      <nav className="navigation">
        <div className="navigation__logo">
          <h3 className="navigation__heading">MovieSaga</h3>
        </div>
        <ul className="navbar__menu">
          <li className="navbar__link">Home</li>
          <li className="navbar__link">WatchList</li>
          <li className="navbar__link">GitHub</li>
        </ul>
      </nav>
    </>
  );
}
