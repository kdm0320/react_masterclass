const API_KEY = "d3d0271cac5a7671f4adb56f9bee388a";
const BASE_PATH = "https://api.themoviedb.org/3";

interface IMovie {
  id: number;
  backdrop_path: string;
  poster_path: string;
  title: string;
  overview: string;
}

export interface IGetMoviesResult {
  dates: {
    maximum: string;
    minimum: string;
  };
  page: number;
  results: IMovie[];
  total_pages: number;
  total_results: number;
}

export function getMovies() {
  console.log(`${BASE_PATH}/movie/now_playing?api_key=${API_KEY}`);
  return fetch(`${BASE_PATH}/movie/now_playing?api_key=${API_KEY}`).then(
    (response) => response.json()
  );
}