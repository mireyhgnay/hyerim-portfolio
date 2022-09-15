import React from "react";
import Poster from "../Poster";
import imgUrl from '../../../images/tmon_chat.jpeg';

const children = [
  "티몬 고객과 판매자가 직접 소통할 수 있는 채팅 플랫폼 구축하게 되어 작업하였습니다",
  "기여도 : Mobile 50% / PC 80%",
  "HTML, SASS, JavaScript, Gulp, Zeplin"
];

export default () => (
  <Poster
    title= "CHATTING"
    subtitle = "TMON"
    imageUrl= {imgUrl}
    description= {children[0]}
    contribution = {children[1]}
    skill= {children[2]}
    webUrl= "https://hyerimiya.notion.site/TMON-SPC-8b4a1214cdc148f3b851ec0ad407bb8b"
  >
  </Poster>
);