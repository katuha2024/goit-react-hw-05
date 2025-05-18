import axios from "axios";


const VITE_TMDB_TOKEN = import.meta.env.VITE_TMDB_TOKEN

const options = {
  headers: {
    Accept: "application/json",
    Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
  },
};


const fetchData = async (url) => {
    try {
      const res = await axios.get(url, options);
      console.log("Отримані дані:", res.data); 
      return res.data || []; 
    } catch (error) {
      console.error(`Помилка запиту до ${url}:`, error.response ? error.response.data : error.message);
      return []; 
    }
  };
  


export const fetchFilmList = async () => fetchData("https://api.themoviedb.org/3/trending/movie/day?language=en-US");

export const fetchDetailsFilm = async (filmId) => fetchData(`https://api.themoviedb.org/3/movie/${filmId}?language=en-US`);

export const fetchReviews = async (filmId) => fetchData(`https://api.themoviedb.org/3/movie/${filmId}/reviews?language=en-US&page=1`);

export const fetchCast = async (filmId) => fetchData(`https://api.themoviedb.org/3/movie/${filmId}/credits?language=en-US`);

export const fetchFilmSearcht = async (query) => fetchData(`https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`);
