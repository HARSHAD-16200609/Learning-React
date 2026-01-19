import React from 'react'
import forward from "../assets/next-forward-arrow-arrows-direction-navigation-right-svgrepo-com.svg"
import back from "../../public/next-forward-arrow-arrows-direction-navigation-right-svgrepo-com.svg"
function Home({children,navbar,searchMovies ,setInput,loadMore}) {
  return (
      <div className="main-cont bg-[#303030] h-screen overflow-auto">

          {navbar}

          <div className="search flex justify-between w-[30%] m-auto mt-10 p-0">
              <input
                  type="text"
                  placeholder="Search your movie here..."
                  className="searchbar text-white bg-[#3F3F3F] p-4 w-[70%] rounded-[10px] outline-0"
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => {
                      if (e.key === "Enter") {
                          searchMovies();
                      }
                  }}
              />

              <button
                  className="searchbtn text-white bg-red-700 w-[25%] rounded-[10px] shadow-[0_35px_35px_rgba(0,0,0,0.25)] cursor-pointer"
                  onClick={searchMovies}
              >
                  Search
              </button>
          </div>

          <div className="movie-card-cont  m-auto mt-4 p-4 grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-4">
              {children}
          </div>
          <div className="pagination m-auto w-40 flex gap-2.5 items-center mb-6">

              <h5 className="text-white"> Load More </h5>
              <img src={forward} className="w-5 h-5 rotate-90 cursor-pointer" onClick={loadMore} ></img>
          </div>
      </div>
  )
}

export default Home