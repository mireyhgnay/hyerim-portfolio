import React from "react";
import Poster from "../Poster";
import imgUrl from '../../../images/lotto.png';

const children = [
  "JavaScript를 사용하여 랜덤으로 로또번호를 생성하는 기능을 구현한 토이프로젝트입니다",
  "기여도 : 100%",
  "HTML, CSS, JavaScript"
];

export default () => (
  <Poster
    title= "LOTTO"
    subtitle = "TOY PROJECT"
    imageUrl= {imgUrl}
    description= {children[0]}
    contribution = {children[1]}
    skill= {children[2]}
    webUrl= "https://github.com/mireyhgnay/lotto"
  >
  </Poster>
);