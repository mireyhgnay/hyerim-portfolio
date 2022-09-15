import React from "react";
import Poster from "../Poster";
import imgUrl from '../../../images/tmon_sub.png';

const children = [
  "구독서비스가 신규서비스로 추가되면서 기존 페이지 스펙 추가 작업 및 신규 UI 개발을 진행하였습니다",
  "기여도 : Mobile 70%",
  "HTML, SASS, JavaScript, Gulp, Zeplin"
];

export default () => (
  <Poster
    title= "SUBSCRIBE"
    subtitle = "TMON"
    imageUrl= {imgUrl}
    description= {children[0]}
    contribution = {children[1]}
    skill= {children[2]}
    webUrl= "https://hyerimiya.notion.site/TMON-755728124fb448ad84dc3c9724b476a8"
  >
  </Poster>
);