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
        title: movie.title,
        releaseDate: movie.release_date,
        posterLink: movie.poster_path
            ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
            : null
    }));

}
