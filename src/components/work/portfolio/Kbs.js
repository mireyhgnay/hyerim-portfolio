import React from "react";
import Poster from "../Poster";
import imgUrl from '../../../images/kbs.png';

const children = [
  "KBS 방송기술웹진 사내 홈페이지 리뉴얼 및 유지 보수 운영",
  "기여도 : Responsive 100% / Design 100%",
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
    webUrl= "https://hyerimiya.notion.site/KBS-77c8b7c35b3542d2b0885c1f8e1266c9"
  >
  </Poster>
);