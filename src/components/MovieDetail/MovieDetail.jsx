import styles from "./MovieDetail.module.css";
import { Link } from "react-router-dom";

export default function MoviseDetail({ film }) {
  return (
    <div className={styles.container}>
      <img
        className={styles.img}
        src={
          film.poster_path
            ? `https://image.tmdb.org/t/p/w500${film.poster_path}`
            : "https://via.placeholder.com/200x300?text=No+Image"
        }
        alt={film.title}
      />
      <div className={styles.info}>
        <h3 className={styles.title}>
          {film.title} (
          {film.release_date ? film.release_date.slice(0, 4) : "No year"})
        </h3>
        <p className={styles.rating}>
          Rating: {film.vote_average?.toFixed(1) ?? "N/A"}
        </p>
        <p className={styles.genres}>
          Genres: {film.genres.map((genre) => genre.name).join(", ")}
        </p>
      </div>
    </div>
  );
}