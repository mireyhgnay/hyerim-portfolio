import React from "react";
import Poster from "../Poster";
import imgUrl from '../../../images/tmon_tvon.jpeg';

const children = [
  "앱이 아닌 외부로 티몬 진입시 브라우저 내에서 라이브 스트리밍을 제공하는 신규서비스 작업을 하였습니다",
  "기여도 : Mobile 100%",
  "HTML, SASS, JavaScript, Gulp, Zeplin"
];

export default () => (
  <Poster
    title= "TVON LIVE"
    subtitle = "TMON"
    imageUrl= {imgUrl}
    description= {children[0]}
    contribution = {children[1]}
    skill= {children[2]}
    webUrl= "https://hyerimiya.notion.site/TMON-TVON-74a8070b608545b19d54286132437664"
  >
  </Poster>
);