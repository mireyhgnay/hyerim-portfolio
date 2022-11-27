import React from "react";
import Poster from "../Poster";
import imgUrl from '../../../images/kbs.png';

const children = [
  "KBS 사내 홈페이지 리뉴얼 개발 작업 및 유지 보수 운영",
  "기여도 : 100%",
  "HTML, CSS, JavaScript, JQuery, Photoshop, Illustrator"
];

export default () => (
  <Poster
    title= "Homepage"
    subtitle = "KBS"
    imageUrl= {imgUrl}
    description= {children[0]}
    contribution = {children[1]}
    skill= {children[2]}
    webUrl= "https://hyerimiya.notion.site/KBS-74e3c1d520204615b75b3fb18fe7989a"
  >
  </Poster>
);