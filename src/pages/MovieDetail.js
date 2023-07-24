import { useLocation } from 'react-router-dom';
import { MovieState } from '../movieState';
import { useState, useEffect } from 'react';
import style from './MovieDetail.module.css';
import Gallery from '../components/Gallery';

const MovieDetail = () => {
  const location = useLocation();
  const url = location.pathname;
  const [movies, setMovies] = useState(MovieState);
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const currentMovie = movies.find((stateMovie) => stateMovie.url === url);
    setMovie(currentMovie);
  }, [movies, url]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className={style.details}>
        <div className={style.headline}>
          <h2 className={style.tit}>{movie.title}</h2>
          <img src={movie.mainImg} alt='movie' className={style.mainImg} />
        </div>

        <div className={style.awards}>
          <h2 className={style.galleryTitle}>G A L É R I A</h2>
        </div>

        <Gallery images={movie.galleryImages} />

        <div className={style.awards}>
          {movie.awards.map((award) => (
            <Award
              className={style.award}
              title={award.title}
              description={award.description}
              key={award.title}
            />
          ))}
        </div>

        {/* <div className={style.imageDisplay}>
          <img src={movie.secondaryImg} alt='movie' />
        </div> */}
      </div>
    </>
  );
};

const Award = ({ title, description }) => {
  return (
    <div className={style.awardStyle}>
      <h3>{title}</h3>
      <div className={style.line}></div>
      <p className={style.description}>{description}</p>
    </div>
  );
};

export default MovieDetail;
