import React from "react";
import Poster from "../Poster";
import imgUrl from '../../../images/github.png';

const children = [
  "제 깃헙에 들어가 더 많은 포트폴리오를 볼 수 있습니다. 앞으로 계속 공부하고 만들어 갑니다!",
  "Hyerim's Github",
  "Git"
];

export default () => (
  <Poster
    title= "GITHUB"
    subtitle = "MORE VIEW"
    imageUrl= {imgUrl}
    description= {children[0]}
    contribution = {children[1]}
    skill= {children[2]}
    webUrl= "https://github.com/mireyhgnay"
  >
  </Poster>
);
