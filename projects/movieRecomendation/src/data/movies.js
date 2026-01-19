import axios from "axios"

const genRanNum = () => {
    return Math.floor(Math.random() * 50 + 1)
}


export const getMovie = async () => {
    const ranNum = genRanNum();
    const res = await axios.get("https://api.themoviedb.org/3/discover/movie",
        {
            params: {
                api_key: "62c717b50588f18199263c4b723544a3",
                page: ranNum,
                sort_by: "popularity.desc",
                "vote_average.gte": 7,
                with_original_language: "en",
                region: "US"
            }
        })

     const movies = res.data.results;

    return movies.map(movie => ({
        id:movie.id,
        title: movie.title,
        releaseDate: movie.release_date,
        posterLink: movie.poster_path
            ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
            : null
    }));

}


export const searchedMovies = async(movieName)=>{
    const res = await axios.get(`https://api.themoviedb.org/3/search/movie`,
        {
            params: {
                api_key:   `${import.meta.env.VITE_API_KEY}`,
                sort_by: "popularity.desc",
                with_original_language: "en",
                region: "US",
                query:movieName
            }
        })

    const movies = res.data.results;

    return movies.map(movie => ({
        id: movie.id,  
        title: movie.title,
        releaseDate: movie.release_date,
        posterLink: movie.poster_path
            ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
            : null
    }));
}

export const hoveredMovie = async(id)=> {
    const res = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}/videos`,
        {
            params: {
                api_key: import.meta.env.VITE_API_KEY,
            },
        }
    );

    const videos = res.data.results;
    return `https://www.youtube.com/embed/${videos[0].key}`;
}

export const hoveredMovInfo = async (id) => {
    const res = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}`,
        {
            params: {
                api_key: import.meta.env.VITE_API_KEY,
            },
        }
    );


    const movieData = res.data;
    
    console.log("Overview:", movieData.overview);
    console.log("Popularity:", movieData.popularity);
    console.log("Title:", movieData.title);
    
    return {
        title: movieData.title,
        overview: (movieData.overview),
        popularity: movieData.popularity,
        rating:( movieData.vote_average).toFixed(1),

    };
}