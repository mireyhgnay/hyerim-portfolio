import React from "react";
import Poster from "../Poster";
import imgUrl from '../../../images/fanpage.jpg';

const children = [
  "평소 좋아하는 아이유의 영상들을 모아둔 사이트입니다. 평소 좋아하는 연예인 관련된 페이지를 만들어보고 싶었는데, React를 공부하고 웹페이지를 만들어보았습니다.",
  "로그인 방법 : github > README > 실행 방법 > 로그인페이지 확인",
  "React, Router, styled-components, mobX, Formik, Yup, JavaScript",
];

export default () => (
  <Poster
    title= "FANPAGE"
    subtitle = "IU BEST VIDEO"
    imageUrl= {imgUrl}
    description= {children[0]}
    contribution = {children[1]}
    skill= {children[2]}
    webUrl= "https://github.com/mireyhgnay/iu-fanpage"
  >
  </Poster>
);
