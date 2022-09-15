import React from "react";
import Poster from "../Poster";
import imgUrl from '../../../images/tmon_tour.jpeg';

const children = [
  "PC/Mobile 티몬 실시간 항공 국내선 검색결과 페이지 전체 개편 작업을 진행하였습니다",
  "기여도 : Mobile 60% / PC 100%",
  "HTML, SASS, JavaScript, JQuery, Gulp, Zeplin"
];

export default () => (
  <Poster
    title= "FLIGHT"
    subtitle = "TMON"
    imageUrl= {imgUrl}
    description= {children[0]}
    contribution = {children[1]}
    skill= {children[2]}
    webUrl= "https://hyerimiya.notion.site/TMON-a8d2be1d1b89473c8e11650805d37919"
  >
  </Poster>
);