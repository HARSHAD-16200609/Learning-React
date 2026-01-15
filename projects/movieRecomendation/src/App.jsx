import { useState } from "react";
import "./App.css";
import MovieCard from "./components/movieCard.jsx";
import {movies} from "./data/movies.js"
function App() {
  return (
    <>
      <div className="main-cont bg-[#303030] h-screen overflow-scroll">
        <nav className="navbar flex justify-between p-4 bg-black">
          <div className="navl text-[#736FCE]">
            {" "}
            <h5>Movie App</h5>
          </div>

          <div className="navr flex justify-between w-40 text-[#736FCE]">
            <h5>Home</h5>
            <h5>Favourites</h5>
          </div>
        </nav>
        <div className="search flex justify-between w-[30%]  m-auto mt-10 p-0">
          <input
            type="text"
            placeholder="Search your movie here..."
            className="searchbar text-white bg-[#3F3F3F] p-4 w-[70%] rounded-[10px] outline-0"
          />
          <button className="searchbtn text-white bg-red-700 w-[25%] rounded-[10px] shadow-[0_35px_35px_rgba(0,0,0,0.25)]">
            Search
          </button>
        </div>

        <div className="movie-card-cont  w-[80%]   m-auto mt-4 p-4 grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-4 ">
          {movies.map((movie,index) => (
            <MovieCard key={index} title={movie.title} relDate={movie.releaseDate.split('-')[0]} imgPath={movie.posterLink} />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
