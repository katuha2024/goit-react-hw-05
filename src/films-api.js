import axios from "axios";
const options = {
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
    },
  };
  
  export const fetchFilmList = async () => {
    const res = await axios.get(
      "https://api.themoviedb.org/3/trending/movie/day?language=en-US",
      options
    );
    return res.data.results;
  };
  
  export const fetchDetailsFilm = async (filmId) => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/${filmId}?language=en-US`,
      options
    );
    return res.data;
  };
  
  export const fetchReviews = async (filmId) => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/${filmId}/reviews?language=en-US&page=1`,
      options
    );
    return res.data.results;
  };
  
  export const fetchCast = async (filmId) => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/${filmId}/credits?language=en-US`,
      options
    );
    return res.data.cast;
  };
  
  export const fetchFilmSearcht = async (query) => {
    const res = await axios.get("https://api.themoviedb.org/3/search/movie", {
      ...options,
      params: { query: query, include_adult: false, language: "en-US", page: 1 },
    });
    return res.data.results;
  };