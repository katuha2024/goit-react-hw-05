import { useEffect, useState } from "react";
import css from "./MovieReviews.module.css";
import { useParams } from "react-router-dom";
import { fetchReviews } from "../../films-api";
import Loader from "../Loader/Loader";

export default function MovieReviews() {
  const { filmId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [expandedIds, setExpandedIds] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    setIsError(false);
    fetchReviews(filmId)
      .then((data) => setReviews(data.results))
      .catch(() => setIsError(true))
      .finally(() => setIsLoading(false));
  }, [filmId]);

  const toggleExpand = (id) => {
    setExpandedIds((prev) =>
      prev.includes(id) ? prev.filter((el) => el !== id) : [...prev, id]
    );
  };
  return (
    <div>
      {isLoading && <Loader loading={isLoading} />}
      {isError && <p>Something went wrong while loading reviews.</p>}

      {!isLoading &&
        !isError &&
        (reviews.length > 0 ? (
          reviews.map((review) => {
            const isExpanded = expandedIds.includes(review.id);
            return (
              <div key={review.id} className={css.reviewItem}>
                <h3 className={css.reviewAuthor}>Author: {review.author}</h3>
                <p
                  className={`${css.reviewContent} ${
                    isExpanded ? css.expanded : ""
                  }`}
                  onClick={() => toggleExpand(review.id)}
                >
                  {review.content}
                </p>
              </div>
            );
          })
        ) : (
          <p>No reviews yet. Be the first to leave one!</p>
        ))}
    </div>
  );
}
