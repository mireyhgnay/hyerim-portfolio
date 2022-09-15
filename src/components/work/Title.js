import React from 'react';
import styled from 'styled-components';

const TitleBlock = styled.h2`
    width: 100%;
    height: auto;
    margin-bottom: 150px;
    text-align: center;
    font-size: 9rem;
    font-family: 'Montserrat', sans-serif;
    color: #ff2817;
    letter-spacing: 2rem;
    transition: 0.3s;

  @media all and (max-width: 1200px) {
    font-size: 7rem;
  }
  
  @media all and (max-width: 1024px) {
    font-size: 5rem;
  }

  @media all and (max-width: 768px) {
      font-size: 2.5rem;
      letter-spacing: 1rem;
  }

  @media all and (max-width: 410px) {
      font-size: 2rem;
      letter-spacing: 0.5rem;
  }
`;


const Title = () => {
  return (
    <TitleBlock>PORTFOLIO</TitleBlock>
  )
}

export default Title;