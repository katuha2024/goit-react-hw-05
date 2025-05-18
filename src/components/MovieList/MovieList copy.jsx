import mycss from "./MovieList.module.css";
import { Link, useLocation } from "react-router-dom";

export default function MovieList({ films }) {
  const location = useLocation();
  return (
    <ul className={mycss.list}>
      {films.map((film) => (
        <li key={film.id} className={mycss.item}>
          <img
            className={mycss.img}
            src={
              film.poster_path
                ? `https://image.tmdb.org/t/p/w200${film.poster_path}`
                : "https://via.placeholder.com/200x300?text=No+Image"
            }
            alt={film.title}
          />
          <div className={mycss.info}>
            <h3 className={mycss.title}>{film.title}</h3>
            <p className={mycss.year}>Rating: {film.vote_average.toFixed(1)}</p>
            <Link
              to={`/movies/${film.id}`}
              state={{ from: location }}
              className={mycss.link}
            >
              Read more
            </Link>
          </div>
        </li>
      ))}
    </ul>
  );
}