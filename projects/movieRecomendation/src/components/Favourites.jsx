import React from 'react'
import MovieCard from "./movieCard.jsx";

function Favourites({Favmovies}) {
  return (


          <div className="main-cont bg-[#303030] h-screen overflow-auto">
              <nav className="navbar flex justify-between p-4 bg-black">
                  <div className="navl text-[#736FCE]">
                      {" "}
                      <h5>Favourites</h5>
                  </div>
              </nav>


              <div className="movie-card-cont  w-[80%]   m-auto mt-4 p-4 grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-4 ">
                  {Favmovies.map((movie) => (
                      <MovieCard key={movie.id} title={movie.title} relDate={movie.releaseDate.split('-')[0]} imgPath={movie.posterLink} heartDisplay={false}/>
                  ))}
              </div>
          </div>

  )
}

export default Favourites