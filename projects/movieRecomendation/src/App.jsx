import "./App.css";
import MovieCard from "./components/movieCard.jsx";
import { getMovie, searchedMovies } from "./data/movies.js";
import React, { useEffect, useState } from "react";
import Favourites from "./components/Favourites.jsx";
import Navbar from "./components/Navbar.jsx";
import { Route, Routes } from "react-router";
import Home from "./pages/Home.jsx";




function App() {
    const [movies, setMovies] = useState([]);
    const [input, setInput] = useState("");
    const [favourites, setFavourites] = useState([]);



    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const newMovies = await getMovie();
                setMovies(newMovies); // no need for prev unless paginating
            } catch (err) {
                console.error("Failed to fetch movies:", err);
            }
        };
        fetchMovies();
    }, [])

    const loadMoreMovies = async()=>{
        try {
            const newMovies = await getMovie();
            setMovies((prev)=>[...prev,...newMovies]); // no need for prev unless paginating
        } catch (err) {
            console.error("Failed to fetch movies:", err);
        }

    }

    async function searchMovies() {
        const searchMovie = await searchedMovies(input)
        setMovies(searchMovie)
    }

    function setFavMovies(movie) {

        setFavourites((prev => [...prev, movie]))
    }

    function deleteFavourites(id) {
        setFavourites((prev) => prev.filter(item => item.id !== id))
    }

    return (
        <>
            <Routes>
                <Route path="/favourites" element={<Favourites Favmovies={favourites} />} />
                <Route path="/" element={<Home searchMovies={searchMovies} setInput={setInput} loadMore={loadMoreMovies} navbar={<Navbar /> }>
                    {movies.map((movie) => (
                        <MovieCard
                            key={movie.id}
                            id={movie.id}
                            title={movie.title}
                            relDate={movie.releaseDate.split("-")[0]}
                            imgPath={movie.posterLink}
                            onFav={setFavMovies}
                            heartDisplay={true}
                            deleteFav={deleteFavourites}
                            isLiked={favourites.some(fav => fav.id === movie.id)}
                        />
                    ))}
                </Home>}></Route>
            </Routes>

        </>
    );
}

export default App;
