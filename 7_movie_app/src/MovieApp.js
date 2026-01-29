import { useEffect, useState } from "react";

const TMDB_TOKEN = process.env.REACT_APP_TMDB_TOKEN;

function MovieApp() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [jenres, setJenres] = useState([]);

  //TMDB API 사용
  const moviesUrl =
    "https://api.themoviedb.org/3/movie/popular?language=ko-KR&page=1";
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${TMDB_TOKEN}`,
    },
  };
  const jenresUrl =
    "https://api.themoviedb.org/3/genre/movie/list?language=ko-KR";

  // async-await 사용을 위한 함수
  // .then() 문법 대체 (일반적임)
  const getMovies = async () => {
    // 강의 코드 작동 안 함 -> TMDB API 사용
    const json = await (await fetch(moviesUrl, options)).json();
    setMovies(json.results);
    setLoading(false);
  };
  const getJenres = async () => {
    // 강의 코드 작동 안 함 -> TMDB API 사용
    const json = await (await fetch(jenresUrl, options)).json();
    setJenres(json.results);
    setLoading(false);
  };

  useEffect(() => {
    getMovies();
    getJenres();
  }, []);

  console.log("movies");
  console.log(movies);
  console.log("jenres");
  console.log(jenres);
  //TODO: 장르 구현
  return (
    <div>
      {loading ? (
        <h1>loading... </h1>
      ) : (
        <div>
          {movies.map((movie) => (
            <div key={movie.id}>
              <h2>{movie.title}</h2>
              <p>{movie.overview}</p>
              <br />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default MovieApp;
