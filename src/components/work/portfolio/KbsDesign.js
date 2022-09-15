import React from "react";
import Poster from "../Poster";
import imgUrl from '../../../images/kbs.png';

const children = [
  "부서에 필요한 웹디자인 작업을 모두 도맡아 하였고, 사내에 발행되는 웹진 제작 및 업데이트 관리를 담당하였습니다",
  "기여도 : Design 100%",
  "HTML, CSS, Photoshop, Illustrator"
];

export default () => (
  <Poster
    title= "Web Design"
    subtitle = "KBS"
    imageUrl= {imgUrl}
    description= {children[0]}
    contribution = {children[1]}
    skill= {children[2]}
    webUrl= "https://hyerimiya.notion.site/KBS-d4c70b1dc163492793017d0e4756e713"
  >
  </Poster>
);