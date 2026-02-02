const moviesUrl =
  "https://api.themoviedb.org/3/movie/popular?language=ko-KR&page=1";
const genresUrl =
  "https://api.themoviedb.org/3/genre/movie/list?language=ko-KR";
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${TMDB_TOKEN}`,
  },
};

const getMovies = async () => {
  const json = await (await fetch(moviesUrl, options)).json();
  setMovies(json.results);
};

<div>
  {movies.map((movie) => (
    <div key={movie.id}>
      <img src={imageUrl + movie.poster_path} width="200" />
    </div>
  ))}
</div>;
