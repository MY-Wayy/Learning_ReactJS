import { useEffect } from "react";
import { useParams } from "react-router-dom";

const TMDB_TOKEN = process.env.REACT_APP_TMDB_TOKEN;

//TODO: (Code Challenge) loading, 상세정보 출력 구현

function Detail() {
  const { id } = useParams();
  console.log(id);
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${TMDB_TOKEN}`,
    },
  };
  const getMovieDetail = async () => {
    const detailUrl = `https://api.themoviedb.org/3/movie/${id}?language=ko-KR`;
    const json = await (await fetch(detailUrl, options)).json();
    console.log(json);
  };

  useEffect(() => {
    getMovieDetail();
  }, []);
  return <h1>Detail</h1>;
}
export default Detail;
