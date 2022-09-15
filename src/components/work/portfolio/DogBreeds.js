import React from "react";
import Poster from "../Poster";
import imgUrl from '../../../images/dog.jpg';

const children = [
  "기존에 있는 DogAPI 오픈소스를 사용하여 React mobx 로 만든 프로젝트입니다",
  "견종을 검색 or 선택 하여 이미지를 가져올 수 있습니다",
  "React, Axios, mobX, Dog API, styled-components, CSS",
];

export default () => (
  <Poster
    title= "DOG API"
    subtitle = "DOG BREEDS SEARCH"
    imageUrl= {imgUrl}
    description= {children[0]}
    contribution = {children[1]}
    skill= {children[2]}
    webUrl= "https://github.com/mireyhgnay/dog-api"
  >
  </Poster>
);
