import React from "react";
import Poster from "../Poster";
import imgUrl from '../../../images/typing.jpg';

const children = [
  "JavaScript와 jQuery를 공부할 때부터 언젠간 미니게임을 만들어보고 싶었습니다. 공부한 내용들을 토대로 영단어 타이핑 게임을 만들게 되었습니다.",
  "기여도 : 100%",
  "HTML, CSS, JavaScript, jQuery",
];

export default () => (
  <Poster
    title= "TYPING GAME"
    subtitle = "TOY PROJECT"
    imageUrl= {imgUrl}
    description= {children[0]}
    contribution = {children[1]}
    skill= {children[2]}
    webUrl= "https://github.com/mireyhgnay/typing-game"
  >
  </Poster>
);
