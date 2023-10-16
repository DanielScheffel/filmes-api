import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App";
import Home from "./pages/home/index";
import Movie from "./pages/movie/index";
import Search from "./pages/search/search";
import Favorite from "./pages/favorites/favorite";
import FavoritesProvider from "./contexts/Favorites";

import "./styles/main.sass";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <FavoritesProvider>
        <Routes>
          <Route element={<App />}>
            <Route path="/" element={<Home />} />
            <Route path="filme/:id" element={<Movie />} />
            <Route path="Search" element={<Search />} />
            <Route path="/favoritos" element={<Favorite />} />
          </Route>
        </Routes>
      </FavoritesProvider>
    </BrowserRouter>
  </React.StrictMode>
);
