import React from "react";
import Poster from "../Poster";
import imgUrl from '../../../images/tmon_preorder.jpeg';

const children = [
  "생산자가 소비자에게 직접 제품을 판매하는 플랫폼이 구축되면서 신규 UI들이 추가되는 작업을 진행하였습니다",
  "기여도 : Mobile 50% / PC 60%",
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
    webUrl= "https://hyerimiya.notion.site/2cce4c79316a40d28d2baf0eeb732bb8"
  >
  </Poster>
);