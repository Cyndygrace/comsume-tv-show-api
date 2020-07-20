import React, { useEffect } from 'react';
import MovieDetails from '../components/MovieDetail';
import { useRecoilValue, useRecoilState } from 'recoil';
import { SearchResult } from '../recoil/selector';
import { ModifiedMovieState } from '../recoil/atom';

const SeasonPage = () => {
  const movie = useRecoilValue(SearchResult);
  const [modifiedMovie, setmodifiedMovie] = useRecoilState(ModifiedMovieState);

  useEffect(() => {
    const filterMovie = (episodes) => {
      let seasons = {};
      episodes.map((episode) => {
        if (!seasons[episode.season]) {
          seasons[episode.season] = {};
          seasons[episode.season].episode = [];
          seasons[episode.season].episode.push(episode);
        } else {
          seasons[episode.season].episode.push(episode);
        }
      });
      setmodifiedMovie(seasons);
      localStorage.setItem('modifiedRes', JSON.stringify(seasons));
    };
    filterMovie(movie._embedded.episodes);
  }, []);

  return (
    <div className="p-4">
      <div
        className="jumbotron mx-auto "
        style={{
          height: '500px',
          maxWidth: '1080px',
          backgroundImage: `url("${movie.image.original}")`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}></div>
      <MovieDetails
        name={movie.name}
        genres={movie.genres}
        seasons={movie._embedded.episodes}
        about={movie.summary}
        image={movie.image.medium}
        modifiedMovie={modifiedMovie}
        releaseDate={movie.premiered}
        network={movie.network.name}
        language={movie.language}
        country={movie.network.country.name}
        lastEpisode={movie._links.previousepisode.href}
        officialSite={movie.officialSite}
      />
    </div>
  );
};

export default SeasonPage;
