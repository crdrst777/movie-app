import React from "react";
import { Link } from "react-router-dom";

//  Link는 브라우저 새로고침 없이도 유저를 다른 페이지로 이동시켜주는 컴포넌트임.
// <a href="/movie">{title}</a> 이런식으로 하면 화면이 새로고침됨. 이걸 피하기 위해 Link를 씀.

const Movie = ({ id, coverImg, title, summary, genres }) => {
  return (
    <div>
      <img src={coverImg} alt={title} />
      <h2>
        <Link to={`/movie/${id}`}>{title}</Link>
      </h2>
      <p>{summary}</p>
      <ul>
        {genres.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul>
    </div>
  );
};

export default Movie;
