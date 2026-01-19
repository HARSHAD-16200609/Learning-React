import React, { useState, useEffect } from 'react';
import { hoveredMovie, hoveredMovInfo } from "../data/movies.js";


function MovieDetails({ movid }) {

    const [movieLink, setMovieLink] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [movInfo, setInfo] = useState("")

    useEffect(() => {
        const fetchMovieLink = async () => {
            try {
                setIsLoading(true);
                const link = await hoveredMovie(movid);
                setMovieLink(link);


                const movieInfo = await hoveredMovInfo(movid);
                setInfo(movieInfo)

            } catch (error) {
                console.error("Failed to fetch movie link:", error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchMovieLink();
    }, [movid]);

    return (
        <div className="movie-cont  m-auto p-4 bg-[#717171] rounded-2xl absolute z-50 top-0 left-0 shadow-2xl w-[150%]">
            {isLoading ? (
                <div className="w-[100%] h-[315px] rounded-3xl mb-4 bg-gray-800 flex items-center justify-center text-white">
                    Loading...
                </div>
            ) : (
                <iframe
                    className="w-[100%] rounded-3xl mb-4"
                    width="560"
                    height="315"
                    src={movieLink}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen>
                </iframe>
            )}

            <div className="info text-white ">
                <span className="flex gap-4 items-center">   <h1 className="text-2xl mb-2">{movInfo.title} </h1>
                    <h1 className="text-[18px]">{movInfo.rating}/10</h1></span>

                <p className={"font-bold text-[#111] font-sans"}>{movInfo.overview}</p>
            </div>
        </div>
    );
}

export default MovieDetails;