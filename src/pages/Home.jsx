import Moviecard from "../components/Moviecard";
import { useState, useEffect } from "react";
import { searchmovies, getPopularmovies } from "../services/api";
import "../css/Home.css";

function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadpopularmovies = async () => {
      try {
        const popularmovies = await getPopularmovies();
        setMovies(popularmovies);
      } catch (err) {
        console.log(err);
        setError("Failed to load movies...");
      } finally {
        setLoading(false);
      }
    };
    loadpopularmovies();
  }, []);

  const handleSearh = async (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return
    if (loading) return

    setLoading(true)
    try{
        const searchResults = await searchmovies(searchQuery)
        setMovies(searchResults)
        setError(null)
    } catch (err){
        console.log(err)
        setError("Failed to search movies...")
    } finally {
        setLoading(false)
    }


    setSearchQuery("");
  };

  return (
    <div className="home">
      <form onSubmit={handleSearh} className="search-form">
        <input
          type="text"
          placeholder="Search for movies..."
          className="searh-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="summit" className="search-button">
          Search
        </button>
      </form>

      {error && <div className="error-message">{error}</div>}

      {loading ? (
        <div className="loading">Loading...</div>
      ) : (
        <div className="movies-grid">
          {movies.map(
            (movie) =>
              movie.title.toLowerCase().startsWith(searchQuery) && (
                <Moviecard movie={movie} key={movie.id} />
              )
          )}
        </div>
      )}
    </div>
  );
}

export default Home;
