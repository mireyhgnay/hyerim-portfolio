import React from "react";
import styled from "styled-components";
import { VscPreview } from "react-icons/vsc";

const Container = styled.div`
  position: relative;
  width: 48%;
  height: auto;

  .poster:hover {
    color: #ff2817;
    transition: 0.3s;
  }

  @media all and (max-width: 1024px) {
    width: 100%;
    margin-bottom: 100px;
  } 
`;

const Title = styled.h3`
  position: absolute;
  top: -40px; left: 20px;
  margin: 0;
  font-size: 5rem;
  font-family: 'Montserrat', sans-serif;
  line-height: 60px;
  letter-spacing: 0px;

  @media all and (max-width: 1260px) {
    font-size: 4rem;
    line-height: 45px;
  } 

  @media all and (max-width: 1024px) {
    font-size: 5rem;
  } 

  @media all and (max-width: 768px) {
    font-size: 4rem;
  } 

  @media all and (max-width: 530px) {
    font-size: 3rem;
    line-height: 35px;
    top: -25px;
  } 

  @media all and (max-width: 425px) {
    font-size: 2rem;
  } 
`;

const SubTitle = styled.strong`
  position: absolute;
  left: 20px;
  top: 40px;
  font-size: 3rem; 
  font-family: 'Montserrat', sans-serif;
  line-height: 60px;
  letter-spacing: 0px;

  @media all and (max-width: 1260px) {
    font-size: 2rem;
    top: 10px;
  } 

  @media all and (max-width: 530px) {
    font-size: 1.5rem;
  } 

  @media all and (max-width: 425px) {
    top: 0px;
  } 
`;

const BgImg = styled.div`
  background-image: url(${probs => probs.imageUrl});
  background-position: center center;
  background-size: cover;
  width: 100%;
  height: 400px;
  z-index:99;

  @media all and (max-width: 1440px) {
    width: 100%;  
  } 
  @media all and (max-width: 425px) {
    height: 300px;
  } 
`;

const Content = styled.div`
  width: 100%;
  margin-top: 20px;

  .poster {
    &_item {
      position: relative;
      padding-left: 15px;
      margin-top: 10px;
      font-size: 17px;
      line-height: 27px;
      color: #000;
    
      &::after {
        content: '';
        position: absolute;
        top: 0px; left: 0px; 
        width: 8px; 
        height: 8px;
        border-radius: 10px;
        background-color: #ff2817;
      }
    
      @media all and (max-width:425px) {
        font-size: 15px;
      }
    }
  }
`;

const Poster = ({ title, imageUrl, description, skill, webUrl, subtitle, contribution }) => (
  <Container>
    <a href={webUrl} target="_blank" className="poster">
      <BgImg imageUrl={imageUrl} />
      <Title>{title}</Title>
      <SubTitle>{subtitle}</SubTitle>
    </a>
    
    <Content>
      <ul className="poster_list">
        <li className="poster_item">{description}</li>
        <li className="poster_item">{contribution}</li>
        <li className="poster_item">{skill}</li>
      </ul>
    </Content>
  </Container>
);

export default Poster;
