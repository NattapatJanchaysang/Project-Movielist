const API_KEY = "da2f9ee6660fc52a2769e92bf4648283";
const BASE_URL = "http://api.themoviedb.org/3"

export const getPopularmovies = async () => {
    const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
    const data = await response.json()
    return data.results
}

export const searchmovies = async (query) => {
    const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIcomponent(query)}`);
    const data = await response.json()
    return data.results
}