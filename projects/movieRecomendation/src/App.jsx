import { useState } from 'react'
import './App.css'
import MovieCard from "./components/movieCard.jsx";

const movies = [
  {
    title: "Inception",
    releaseDate: "2010-07-16",
    poster: "https://image.tmdb.org/t/p/w500/qmDpIHrmpJINaRKAfWQfftjCdyi.jpg"
  },
  {
    title: "Interstellar",
    releaseDate: "2014-11-07",
    poster: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg"
  },
  {
    title: "The Dark Knight",
    releaseDate: "2008-07-18",
    poster: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg"
  },
  {
    title: "Avengers: Endgame",
    releaseDate: "2019-04-26",
    poster: "https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg"
  },
  {
    title: "Joker",
    releaseDate: "2019-10-04",
    poster: "https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg"
  }
];
function App() {


  return (
    <>
        <div className="main-cont bg-[#303030] h-screen overflow-scroll">
    <nav className='navbar flex justify-between p-4 bg-black'>
      <div className="navl text-[#736FCE]"> <h5>Movie App</h5></div>
     
      <div className="navr flex justify-between w-40 text-[#736FCE]"><h5>Home</h5><h5>Favourites</h5></div>
    </nav>
     <div className="search flex justify-between w-[30%]  m-auto mt-10 p-0">
         <input type="text" placeholder="Search your movie here..."  className="searchbar text-white bg-[#3F3F3F] p-4 w-[70%] rounded-[10px] outline-0"/>
         <button className="searchbtn text-white bg-red-700 w-[25%] rounded-[10px] shadow-[0_35px_35px_rgba(0,0,0,0.25)]">Search</button>
     </div>

           <div className="movie-card-cont  w-[80%] bg-red-800 h-screen m-auto mt-4 p-4">
            {
              movies.forEach((movie)=>{
                <MovieCard ></MovieCard>
              })
            }

           </div>


        </div>
    </>
  )
}

export default App
