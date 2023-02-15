import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Detail = () => {
  // useParams() -> url에 있는 변경되는 값을 반환헤주는 함수 (id같은거)
  // 값이 {id: '48625'} 이렇게 나오는데, 아래처럼 변수명을 {}로 감싸주면 값이 바로 48625로 나옴.
  const { id } = useParams();
  // console.log(id);
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState([]);

  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    // console.log(json.data.movie);
    setMovie(json.data.movie);
    setLoading(false);
  };
  console.log(movie);

  useEffect(() => {
    getMovie();
  }, []);

  return (
    <>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <h1>{movie.title_long}</h1>
          <p>runtime : {movie.runtime}</p>
          <p>rating : {movie.rating}</p>
          <hr></hr>
          <p>{movie.description_full}</p>
          <img src={movie.medium_cover_image} alt={movie.title} />
        </>
      )}
    </>
  );
};

export default Detail;
