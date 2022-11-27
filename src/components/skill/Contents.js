import React from 'react';
import styled from 'styled-components';

const ContentsBlock = styled.section`
  width: 100%;
  margin-top: 100px;
  text-align: center;

  .text {
    margin: 0;
    font-size: 17px;
    color: #000;
    line-height: 35px;
  }

  .title {
    color: #ff2817;
  }

  .desc {
    margin-left: 10px;
  }

  @media all and (max-width: 700px) {
    padding: 0 20px;

    .text {
      font-size: 15px;
      line-height: 25px;
      margin-top: 10px;
    }
  }

  @media all and (max-width: 550px) { 
    .text {
      margin-top: 20px;
    }

    .title {
      display: block;
    }
  }
  @media all and (max-width: 425px) { 
    .text {
      margin-top: 20px;
    }
  }
`;

const Contents = () => {
  return (
    <ContentsBlock>
      <p className="text">
        <strong className="title">FrontEnd</strong>
        <span className="desc">항상 새로운 기술을 공부하고, 자기계발 하는 것을 좋아합니다.</span>
      </p>
      <p className="text">
        <strong className="title">Animation</strong>
        <span className="desc">재미있는 효과들을 흥미롭게 생각하고 고민합니다.</span>
      </p>
      <p className="text">
        <strong className="title">Communication</strong>
        <span className="desc">사람들과의 대화를 좋아하고, 기획자/디자이너/개발자 사이에서의 소통이 원활합니다.</span>
      </p>
    </ContentsBlock>
  )
}

export default Contents;