import React from "react";
import Poster from "../Poster";
import imgUrl from '../../../images/port.jpg';

const children = [
  "React로 제작한 저를 소개하는 포트폴리오입니다",
  "기여도 : 100%",
  "React, styled-components, Router, react-icons"
];

export default () => (
  <Poster
    title= "PORTFOLIO"
    subtitle = "REACT PORTFOLIO"
    imageUrl= {imgUrl}
    description= {children[0]}
    contribution = {children[1]}
    skill= {children[2]}
    webUrl= "https://github.com/mireyhgnay/hyerim-portfolio"
  >
  </Poster>
);
