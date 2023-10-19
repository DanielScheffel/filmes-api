import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App";
import Home from "./pages/home/index";
import Movie from "./pages/movie/index";
import Search from "./pages/search/search";
import Favoritos from "./pages/favoritos/favoritos";

import "./styles/main.sass";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
        <Routes>
          <Route element={<App />}>
            <Route path="/" element={<Home />} />
            <Route path="filme/:id" element={<Movie />} />
            <Route path="Search" element={<Search />} />
            <Route path="/favoritos" element={<Favoritos />} />
          </Route>
        </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
