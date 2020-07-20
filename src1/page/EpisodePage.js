import React from 'react';
import EpisodeList from '../components/EpisodeList';
import { useRecoilValue } from 'recoil';
import { SearchResult } from '../recoil/selector';
import MovieDetails from '../components/MovieDetail';
import { useParams } from 'react-router-dom';

const EpisodePage = () => {
  const { id } = useParams();
  const movie = useRecoilValue(SearchResult);
  const modifiedMovie = JSON.parse(localStorage.getItem('modifiedRes'));

  return (
    <div className="m-4">
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
      <div
        className="card border-light mb-3 mx-auto"
        style={{ maxWidth: '1080px' }}>
        <div className="card-header text-center">
          <strong>Episode 1 List</strong>
        </div>
      </div>
      <EpisodeList episodeArray={modifiedMovie[id].episode} />
    </div>
  );
};

export default EpisodePage;
