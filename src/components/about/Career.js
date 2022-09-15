/* Section4 :: 경력 */
import React from 'react';
import styled from 'styled-components';

const IntroduceInner = styled.section`
  width: 100%;
  margin: 100px auto;
`

const IntroduceBlock = styled.article`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  
  & + & {
    margin-top: 100px;
  }

  .point_color {
    color: #ff2817;
  }

  @media all and (max-width: 1024px) {
    padding: 0 20px;
  }
`;

const IntroText = styled.div`
  width: 50%;

  .company {
    margin: 0;
    font-weight: bold;
    font-size: 4rem;
    color: #000;
  }
  .career {
    margin: 0;
    font-size: 1.6rem;
    color: #000;
  }
  .date {
    margin: 10px 0 0;
    font-size: 1.1rem;
    color: gray;
  }
  .list {
    margin-top: 40px;
    font-size: 1.1rem;
    color: #000;
    
    li {
      position: relative;
      padding-left: 15px;
      line-height: 25px;

      &::before {
        position: absolute;
        left: 0; top: 6px;
        width: 8px; 
        height: 8px; 
        border-radius: 100%;
        background-color: #000;
        content: '';
      }
    }

    li + li {
      margin-top : 15px;
    }
  }

  @media all and (max-width: 1440px) {
    .title { 
      font-size: 1.8rem; 
    }

    .company {
      font-size: 3rem;
      line-height: 80px;
    }

    .career {
      font-size: 1.4rem;
    }

    .list { font-size: 1rem; }
  }

  @media all and (max-width: 1024px) {
    width: 100%;
  }

  @media all and (max-width: 490px) {
    .title { font-size: 1.3rem; }
    .company { font-size: 2rem; }
    .career { font-size: 1rem; }
    .date { font-size: 1rem; }
    .list { font-size: 0.9rem; }
  }

  @media all and (max-width: 360px) {
    .title { font-size: 1.2rem; }
    .company_name { font-size: 1.1rem; }
    .career { font-size: 0.9rem; }
    .career-date { font-size: 0.9rem; }
  }
`;

export const TitleText = styled.h2`
  font-size: 2rem;
  color: #ff2817;
  margin: 0;
`;

const MyPhoto = styled.div`
  width: 500px;
  height: 500px;
  
  .career_img {
    width : 100%;
  }

  @media all and (max-width: 1024px) {
    display: none;
  }
`;

const Career = () => {
  return (
    <IntroduceInner>
      <IntroduceBlock>
        <IntroText>
          <TitleText> Career </TitleText>
          <strong className="company">TMON</strong>
          <p className="career">프론트개발실 / 마크업개발팀</p>
          <p className="date">2021.07 ~ <strong className="point_color">재직중</strong> </p>
          <ul className="list">
            <li>티몬 프론트&백엔드 서비스 전체 UI 개발 작업</li>
            <li>페이지 전체 개편작업 / 신규서비스 작업 등 대형 프로젝트를 진행해왔습니다.</li>
            <li>개선 작업 / 레거시 코드 제거 등 작업 중 개선사항들이 보이면 바로 의견을 내며 능동적으로 일해왔습니다.</li> 
            <li>개발 작업 외에 업무 히스토리 기록이나 신규입사자 온보딩 문서 작성 등 문서작업들도 해왔습니다.</li>
            <li>개인 스터디를 많이 하는 분위기였기 때문에 팀스터디 활성화를 위해 먼저 스터디를 하자고 권유하여 <br />스터디장으로 나서 팀원분들을 모아 진행한 경험이 있습니다.</li>
          </ul>
        </IntroText>

        <MyPhoto>
          <img src="./tmon_logo.jpeg" className="career_img" alt="티몬 로고 이미지" />
        </MyPhoto>
      </IntroduceBlock> 


      <IntroduceBlock>
        <IntroText>
          <TitleText> Career </TitleText>
          <strong className="company">KBS 한국방송공사</strong>
          <p className="career">기술지원부 / 웹퍼블리셔 & 웹디자이너</p>
          <p className="date">2018.04 ~ 2020.04 (2년)</p>
          <ul className="list">
            <li>
              웹디자이너와 웹퍼블리셔를 두고 진로를 고민하던 중, <br />두 가지를 모두 할 수 있는 업무인 것을 경험해보고싶어 입사에 도전한 회사였습니다.
            </li>
            <li>방송기술웹진 사내 사이트 리뉴얼 작업 및 유지보수 관리</li>
            <li>부서에 필요한 전반적인 디자인 업무 ex) 현수막, 배너, 포스터, 명패, 책자, 웹진 등... </li>
            <li>미디어창의기술전, KOBA 등의 행사 참여 </li> 
            <li>퇴사 후에도 일했던 부서에서 제가 해왔던 업무를 부탁받아 외주작업을 해왔습니다.</li>
          </ul>
        </IntroText>

        <MyPhoto>
          <img src="./career.gif" className="career_img" alt="KBS 이미지" />
        </MyPhoto>
      </IntroduceBlock>
    </IntroduceInner>
  )
}

export default Career;