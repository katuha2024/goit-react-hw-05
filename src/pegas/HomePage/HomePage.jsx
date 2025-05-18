import { useEffect, useState } from "react";
import mycss from "./HomePage.module.css";
import MovieList from "../../components/MovieList/MovieList";
import { fetchFilmList } from "../../films-api";
import Loader from "../../components/Loader/Loader";

export default function HomePage() {
  const [films, setFilms] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setLoading(true);
    setIsError(false);
    fetchFilmList()
      .then((data) => {
        setFilms(data);
        setIsError(false);
      })
      .catch((error) => {
        setIsError(true);
      })
      .finally(() => setLoading(false));
  }, []);
  return (
      <div className={mycss.HomePage}>
      <h2>Топ фільмів на сьогодні</h2>
      {isLoading && <Loader loading={isLoading} />}
      {!isLoading && isError && <p>Something went wrong, try again later</p>}
      {films.length > 0 && <MovieList films={films} />}
    </div>
  );
}