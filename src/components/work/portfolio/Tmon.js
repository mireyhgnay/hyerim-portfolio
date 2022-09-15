import React from "react";
import Poster from "../Poster";
import imgUrl from '../../../images/tmon.jpeg';

const children = [
  "티몬의 신규 프로젝트나 개편 작업 외에도 프론트&백엔드 서비스 전체 UI 개발 작업을 진행해왔습니다",
  "유지보수 / 추가 스펙 작업 / 개선 작업 / 레거시 코드 제거 / 문서 작업 등",
  "HTML, CSS, SASS, JavaScript, JQuery, Gulp, Zeplin"
];

export default () => (
  <Poster
    title= "TMON"
    subtitle = "TMON"
    imageUrl= {imgUrl}
    description= {children[0]}
    contribution = {children[1]}
    skill= {children[2]}
    webUrl= "https://hyerimiya.notion.site/TMON-UI-294beab132d644579f6569e99cd42c07"
  >
  </Poster>
);