import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BiCameraMovie, BiSearchAlt2 } from "react-icons/bi";

import "../styles/components/navbar.sass";

const Navbar = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!search) return;

    navigate(`/search?q=${search}`);
    setSearch("");
  };

  return (
    <nav id="navbar">
      <div className="menu">
        <div className="nav-items">
          <div className="items">
            <h2>
              <Link to="/">
                <BiCameraMovie />
                Movies
              </Link>
            </h2>
            <ul className="nav-list">
              <Link to="/favoritos">
                <li className="nav-item">Favoritos</li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Busque um filme"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
        <button type="submit">
          <BiSearchAlt2 />
        </button>
      </form>
    </nav>
  );
};

export default Navbar;
