import React from 'react'


function Home({children,navbar,searchMovies ,setInput}) {
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
                  className="searchbtn text-white bg-red-700 w-[25%] rounded-[10px] shadow-[0_35px_35px_rgba(0,0,0,0.25)]"
                  onClick={searchMovies}
              >
                  Search
              </button>
          </div>

          <div className="movie-card-cont w-[80%] m-auto mt-4 p-4 grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-4">
              {children}
          </div>
      </div>
  )
}

export default Home