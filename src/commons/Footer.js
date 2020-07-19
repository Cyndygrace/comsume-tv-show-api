import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return (
    <FooterContainer>
      <span>
        &copy;{new Date().getFullYear()} All Rights Reserved. ZoneTechPark
        Assesment
      </span>
    </FooterContainer>
  );
};

export default Footer;

// FOOTERContainer
const FooterContainer = styled.footer`
  background: #344;
  z-index: 100;
  height: 4rem;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  span {
    color: #fff;
    top: 1.5rem;
    left: 1rem;
    position: relative;
  }
`;
