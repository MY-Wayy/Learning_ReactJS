import { Link } from "react-router-dom";

function Movie({ imageUrl, posterPath, title, overview, genreIds, genresMap }) {
  return (
    <div>
      <img src={imageUrl + posterPath} alt={title} />
      <h2>
        <Link to="/movie">{title}</Link>
      </h2>
      <p>{overview}</p>
      <ul>
        {genreIds
          .map((id) => <li key={id}>{genresMap[id]}</li>)
          .filter(Boolean)}
      </ul>
      <br />
    </div>
  );
}

export default Movie;
