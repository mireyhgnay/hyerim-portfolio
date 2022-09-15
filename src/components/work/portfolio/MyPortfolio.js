import React from "react";
import Poster from "../Poster";
import imgUrl from '../../../images/port.jpg';

const children = [
  "React로 제작한 저를 소개하는 포트폴리오입니다. 기획/디자인/코딩/배포 까지 모두 혼자 제작한 프로젝트입니다.",
  "기여도 : 100%",
  "React, React Hooks, Router, styled-components, CSS, react-icons",
];

export default () => (
  <Poster
    title= "PORTFOLIO"
    subtitle = "REACT PORTFOLIO"
    imageUrl= {imgUrl}
    description= {children[0]}
    contribution = {children[1]}
    skill= {children[2]}
    webUrl= "https://github.com/mireyhgnay/my-portfolio"
  >
  </Poster>
);
