import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Movie({
  id,
  imageUrl,
  posterPath,
  title,
  overview,
  genreIds,
  genresMap,
}) {
  return (
    <div>
      <img src={imageUrl + posterPath} alt={title} />
      <h2>
        <Link to={`/movie/${id}`}>{title}</Link>
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

Movie.propType = {
  id: PropTypes.number.isRequired,
  imageUrl: PropTypes.string.isRequired,
  posterPath: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
  genreIds: PropTypes.string.isRequired,
  genresMap: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      genreName: PropTypes.string.isRequired,
    }),
  ),
};

export default Movie;
