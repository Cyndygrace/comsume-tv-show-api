import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { removeHtmlChars } from '../utils/helper';

const MovieDetails = (props) => {
  const [startIndex, setStartIndex] = useState(0);
  const [currentKeys, setCurrentKeys] = useState([]);
  const keys = Object.keys(props.modifiedMovie);

  const next = (season, startIndex) => {
    if (startIndex > season.length - 1) {
      let pagination = season.splice(0, 2);
      setStartIndex(2);
      return pagination;
    }
    let pagination = season.splice(startIndex, 2);
    if (pagination.length < 2) {
      setStartIndex(0);
    } else {
      let startI = startIndex + 2;
      setStartIndex(startI);
    }
    return pagination;
  };
  useEffect(() => {
    let currentPage = next(keys, startIndex);
    setCurrentKeys([...currentPage]);
  }, []);
  const paginate = () => {
    let mainPage = next(keys, startIndex);
    setCurrentKeys(mainPage);
  };
  return (
    <div>
      <div className="card mb-3 mx-auto" style={{ maxWidth: '1080px' }}>
        <div className="row no-gutters">
          <div className="col-md-3">
            <img src={props.image} className="card-img" alt="here" />
          </div>

          <div className="col-md-5 ">
            <div className="card-body font-weight-bold">
              <h5 className="card-title font-weight-bold">
                Title:
                <span className="font-weight-bold"> {props.name}</span>
              </h5>
              <p className="card-text">
                About: <small>{removeHtmlChars(props.about)}</small>{' '}
              </p>
              <div className="card-text ">
                <p className="text-muted my-3">
                  Genre: {props.genres.join(', ')}
                </p>
                <p className=" m-0 ">
                  Last Episode:
                  <small className="text-primary">{props.lastEpisode}</small>
                </p>

                <p className=" m-0">
                  Offical Site:
                  <small className="text-primary">{props.officialSite}</small>
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <CardBodyContainer className="card-body">
              <h5 className="card-title font-weight-bold">
                Seasons:
                {currentKeys.map((item, index) => {
                  return (
                    <Link key={index} to={{ pathname: `/seasons/${item}` }}>
                      <MovieContainer className="movie-seasons p-1 m-2">
                        {item}
                      </MovieContainer>
                    </Link>
                  );
                })}
                <span onClick={paginate}>Next{startIndex}</span>
              </h5>
              <p className="card-text my-4">
                <strong>Release Date:</strong> {props.releaseDate}
              </p>
              <div className="card-text ">
                <p className="text-muted m-0">Country: {props.country}</p>
                <p className="text-muted m-0">Language: {props.language}</p>
                <p className="text-muted m-0">Network: {props.network}</p>
              </div>
            </CardBodyContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;

// movie Season container
const MovieContainer = styled.span`
  color: var(--dark-green);
  font-weight: 900;
  border-radius: 40%;
`;
// card body
const CardBodyContainer = styled.div`
  a {
    textdecoration: none;
    color: unset;
  }
`;
// height: 50px;
// width: 50px;
