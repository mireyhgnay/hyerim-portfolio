import React from "react";
import Poster from "../Poster";
import imgUrl from '../../../images/tmon_chat.jpeg';

const children = [
  "고객센터 채팅상담과 별개의 고객과 판매자가 직접 소통할 수 있는 채팅 플랫폼을 구축하였습니다",
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
    webUrl= "https://hyerimiya.notion.site/9b279c5597804e3fb9692345c851acf3"
  >
  </Poster>
);