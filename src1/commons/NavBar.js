import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <NavBarContainer>
      <nav className="navbar navbar-expand-lg navbar-light px-5 py-0">
        <Link to="/" className="navbar-brand">
          <strong>TV-SERIES</strong>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <Link to="/" className="nav-link font-weight-bold">
                Home <span className="sr-only">(current)</span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </NavBarContainer>
  );
};

export default NavBar;

// MAIN NAVBAR CONTAINER
const NavBarContainer = styled.div`
  background: var(--dark-green);
  .nav-link {
    color: #fff !important;
    &: hover {
      background: var(--light-green);
    }
  }
  strong {
    font-weight: 900;
  }
`;
