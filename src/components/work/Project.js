import React from 'react';
import styled from 'styled-components';
import TmonTour from './portfolio/TmonTour';
import TypingGame from './portfolio/TypingGame';
import FanPage from './portfolio/FanPage';
import DogBreeds from './portfolio/DogBreeds';
import MyPortfolio from './portfolio/MyPortfolio';
import Ready from './portfolio/Ready';
import TmonSub from './portfolio/TmonSub';
import TmonChat from './portfolio/TmonChat';
import TmonTvon from './portfolio/TmonTvon';
import TmonPreorder from './portfolio/TmonPreorder';
import Tmon from './portfolio/Tmon';
import Kbs from './portfolio/Kbs';
import KbsDesign from './portfolio/KbsDesign';
import Lotto from './portfolio/Lotto';

const ProjectBlock = styled.section`
  width: 100%;
  height: auto;
  margin: 0;
  padding: 0 80px;
  
  @media all and (max-width: 1440px) {
    padding: 0 40px;
  }
  @media all and (max-width: 1024px) {
    padding: 0 40px;
  }
`;

const PosterBlock = styled.article`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-bottom: 200px;

  @media all and (max-width: 1024px) {
    display: block;
    margin-bottom: 0;
  }
`;

const Project = () => {
  return (
    <ProjectBlock>
      <PosterBlock>
        <TmonTour></TmonTour>
        <TmonTvon></TmonTvon>
      </PosterBlock>

      <PosterBlock>
        <TmonChat></TmonChat>
        <TmonSub></TmonSub>
      </PosterBlock>

      <PosterBlock>
        <TmonPreorder></TmonPreorder>
        <Tmon></Tmon>
      </PosterBlock>

      <PosterBlock>
        <Kbs></Kbs>
        <KbsDesign></KbsDesign>
      </PosterBlock>
      
      <PosterBlock>
        <TypingGame></TypingGame>
        <Lotto></Lotto>
      </PosterBlock>

      <PosterBlock>
        <DogBreeds></DogBreeds>
        <FanPage></FanPage>
      </PosterBlock>

      <PosterBlock>
        <MyPortfolio></MyPortfolio>
        <Ready></Ready>
      </PosterBlock>
    </ProjectBlock>
  )
}

export default Project;