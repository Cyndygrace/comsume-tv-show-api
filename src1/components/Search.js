import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import style from 'styled-components';
import { useHistory } from 'react-router-dom';
import Axios from 'axios';
import { MoviesState } from '../recoil/atom';

const Search = () => {
  // states, input query or movies
  const [query, setQuery] = useState('');
  const [error, setError] = useState(false);
  const [movies, setMovies] = useRecoilState(MoviesState);
  const url = `https://api.tvmaze.com/singlesearch/shows/?q=${query}&embed=episodes`;
  const history = useHistory();

  const getData = async () => {
    return Axios({
      method: 'GET',
      url: url,
    })
      .then((response) => {
        if (response.status === 200) {
          setMovies(response.data);
          localStorage.setItem('res', JSON.stringify(response.data));
          history.push('/movie');
        } else {
          setError(true);
        }
      })
      .catch((error) => {
        setError(true);
      });
  };

  const searchMovies = async (e) => {
    e.preventDefault();
    const value = query.trim();
    if (!value) {
      return;
    }
    getData();
  };
  return (
    <div>
      <SearchContainer className="main">
        <h1 className="mb-4">Search For Your Favourite Series</h1>
        <form onSubmit={searchMovies}>
          <input
            type="text"
            name="query"
            placeholder="Search for movies"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />

          <button className="searchBtn m-0" type="submit">
            <i className="fa fa-search"></i>
          </button>
        </form>
      </SearchContainer>
    </div>
  );
};

export default Search;
// SEARCH CONTAINER

const SearchContainer = style.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  input {
    border: 3px solid var(--dark-green);
    width: 60%;
    height: 40px;
    border-radius: 50px;
    padding: 0px 10px;
    outline:none;
    margin-left: 20%;

  }
  .searchBtn {
    float:right;
    color: #000;
    &: hover {
      background: var(--light-green);
      border-radius: 50%
    }
    width:40px;
    height:40px;
    border-radius: 50%;
    background: var(--light-green);
    display:flex;
    justify-content:center;
    align-items: center;
    text-decoration: none;
    outline:none
  }
  `;
