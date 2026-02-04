import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const TMDB_TOKEN = process.env.REACT_APP_TMDB_TOKEN;

//TODO: (Code Challenge) loading, 상세정보 출력 구현

function Detail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [details, setDetails] = useState([]);
  const imageUrl = "https://image.tmdb.org/t/p/w300";
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
    setDetails(json);
    setLoading(false);
  };

  useEffect(() => {
    getMovieDetail();
  }, []);

  console.log(id);
  console.log(details);

  return (
    <div>
      {/* 로딩 구현 */}
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <div>
          <h2>
            {/* 홈으로 가는 네비게이션 바? 구현 */}
            <Link to="/">To Home</Link>
          </h2>
          <img src={imageUrl + details.poster_path} />
          <h1>{details.title}</h1>
          <h3>{details.original_title}</h3>

          {/* 제작사 로고, 제작사명 목록 표시 */}
          <h4>{details.production_companies.length > 0 ? "제작사" : null}</h4>
          {details.production_companies.map((pc) => (
            <div
              key={pc.id}
              style={{
                width: "500px",
                margin: "3px",
                padding: "10px",
                backgroundColor: " rgb(230, 230, 230)",
                border: "",
                borderRadius: "12px",
              }}
            >
              {pc.logo_path ? (
                <img src={imageUrl + pc.logo_path} width="80px" />
              ) : null}
              <label style={{ paddingLeft: "10px" }}>
                {pc.name} {pc.origin_country ? `(${pc.origin_country})` : null}
              </label>
            </div>
          ))}
          <br />
          <p>
            {`러닝타임: ${details.runtime}분 `}
            {`/ 출시 일자: ${details.release_date} `}
            {`/ 장르: ${details.genres.map((g) => g.name).join(", ")}`}
          </p>
          <p>{`평점: ${details.vote_average} / 10.0 (평가 관객 수: ${details.vote_count})`}</p>

          {/* 주요 정보 표시 (예외처리 포함) */}
          {details.tagline || details.overview ? (
            <div>
              <hr />
              <h2>주요 정보</h2>
              <h3>{details.tagline}</h3>
              <p>{details.overview}</p>
            </div>
          ) : null}
        </div>
      )}
    </div>
  );
}
export default Detail;
