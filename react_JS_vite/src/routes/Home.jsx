import { useState, useEffect } from "react";
import Movie from "../components/Movie";

const TMDB_TOKEN = import.meta.env.VITE_TMDB_TOKEN;

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [genresMap, setGenresMap] = useState([]);
  const imageUrl = "https://image.tmdb.org/t/p/w200";

  // 강의 코드 작동 안 함 -> TMDB API 사용
  const moviesUrl =
    "https://api.themoviedb.org/3/movie/popular?language=ko-KR&page=1";
  //장르id to 장르명
  const genresUrl =
    "https://api.themoviedb.org/3/genre/movie/list?language=ko-KR";
  //API 키 등 API에 보낼 옵션
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
  const getGenres = async () => {
    const json = await (await fetch(genresUrl, options)).json();
    // 장르 json을 map 형식( {key : value} )으로 전환
    const map = {};
    json.genres.forEach((g) => {
      map[g.id] = g.name;
    });
    setGenresMap(map);
    setLoading(false);
  };

  useEffect(() => {
    getMovies();
    getGenres();
  }, []);

  //자료 체크
  if (genresMap.length != 0) {
    console.log("movies");
    console.log(movies);
    console.log("genres");
    console.log(genresMap);
  }

  //TODO: 장르 구현
  return (
    <div>
      {loading ? (
        <h1>loading... </h1>
      ) : (
        <div>
          {movies.map((movie) => (
            <Movie
              key={movie.id}
              id={movie.id}
              imageUrl={imageUrl}
              posterPath={movie.poster_path}
              title={movie.title}
              overview={movie.overview}
              genreIds={movie.genre_ids}
              genresMap={genresMap}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
