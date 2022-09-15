import React from "react";
import Poster from "../Poster";
import imgUrl from '../../../images/tmon_preorder.jpeg';

const children = [
  "생산자가 소비자에게 직접 제품을 판매하는 D2C 플랫폼이 구축되면서 기존 페이지에 신규 프리오더 UI들이 추가되는 UI개발 작업을 진행하였습니다",
  "기여도 : Mobile 50% / PC 50%",
  "HTML, CSS, SASS, JavaScript, Gulp, Zeplin"
];

export default () => (
  <Poster
    title= "PREORDER"
    subtitle = "TMON"
    imageUrl= {imgUrl}
    description= {children[0]}
    contribution = {children[1]}
    skill= {children[2]}
    webUrl= "https://hyerimiya.notion.site/TMON-751a3a2300b44f929ebc4ac5d7603d10"
  >
  </Poster>
);