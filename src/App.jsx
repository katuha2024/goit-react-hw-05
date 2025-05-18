import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import "./App.css";
import MovieCast from "./components/MovieCast/MovieCast";
import MovieReviws from "./components/MovieReviews/MovieReviews";

import { lazy, Suspense } from "react";
const HomePage = lazy(() => import("./pegas/HomePage/HomePage"));
const MoviesPage = lazy(() => import("./pegas/MoviesPage/MoviesPage"));
const NotFoundPage = lazy(() => import("./pegas/NotFoundPage/NotFoundPage"));
const MovieDetailsPage = lazy(() => import("./pegas/MovieDetailsPage/MovieDetailsPage"));

function App() {
  return (
    <div className="container">
      <Header />
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:filmId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<MovieCast />} />
            <Route path="reviews" element={<MovieReviws />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
          <Route />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;