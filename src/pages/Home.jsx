import Moviecard from "../components/Moviecard";
import { useState } from "react";
import "../css/Home.css"

function Home() {
  const [searchQuery, setSearchQuery] = useState("");

  const movies = [
    { id: 1, title: "พี่มาก..พระโขนง", release_date: "2556" },
    { id: 2, title: "สัปเหร่อ", release_date: "2566" },
    { id: 3, title: "สุริโยไท", release_date: "2544" },
    { id: 4, title: "นาคี 2", release_date: "2561" },
  ];

  const handleSearh = () => {
    e.preventDefault();
    alert(searchQuery);
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

      <div className="movies-grid">
        {movies.map(
          (movie) =>
            movie.title.startsWith(searchQuery) && (
              <Moviecard movie={movie} key={movie.id} />
            )
        )}
      </div>
    </div>
  );
}

export default Home;
