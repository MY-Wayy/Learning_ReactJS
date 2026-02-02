import { useEffect, useState } from "react";

const TMDB_TOKEN = process.env.REACT_APP_TMDB_TOKEN;

function MovieApp() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [genresMap, setGenresMap] = useState([]);
  const imageUrl = "https://image.tmdb.org/t/p/w500";

  // 강의 코드 작동 안 함 -> TMDB API 사용
  const moviesUrl =
    "https://api.themoviedb.org/3/movie/popular?language=ko-KR&page=3";
  const genresUrl =
    "https://api.themoviedb.org/3/genre/movie/list?language=ko-KR";
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${TMDB_TOKEN}`,
    },
  };

  // async-await 사용을 위한 함수
  // .then() 문법 대체 (일반적임)
  const getMovies = async () => {
    const json = await (await fetch(moviesUrl, options)).json();
    setMovies(json.results);
  };
  const getJenres = async () => {
    const json = await (await fetch(genresUrl, options)).json();
    // 장르 json을 map 형식으로 전환
    const map = {};
    json.genres.forEach((g) => {
      map[g.id] = g.name;
    });
    setGenresMap(map);
    setLoading(false);
  };

  useEffect(() => {
    getMovies();
    getJenres();
  }, []);

  console.log("movies");
  console.log(movies);
  console.log("genres");
  console.log(genresMap);
  //TODO: 장르 구현
  return (
    <div>
      {loading ? (
        <h1>loading... </h1>
      ) : (
        <div>
          {movies.map((movie) => (
            <div key={movie.id}>
              <img src={imageUrl + movie.poster_path} />
              <h2>{movie.title}</h2>
              <p>{movie.overview}</p>
              <ul>
                {movie.genre_ids
                  .map((id) => <li key={id}>{genresMap[id]}</li>)
                  .filter(Boolean)}
              </ul>
              <br />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default MovieApp;
