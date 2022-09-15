/* Section1 :: 자기소개 */
import React from 'react';
import styled from 'styled-components';

export const IntroduceBlock = styled.section`
  position: relative;
  margin: 100px auto 0;
  width: 1300px;

  @media all and (max-width: 1440px) {
    width: 100%;
  }
`;

export const TitleText = styled.h2`
  font-size: 2rem;
  margin-bottom: 10px;
  font-weight: bold;
  color: #ff2817;

  @media all and (max-width: 1440px) {
    padding-left: 20px;
  }
`;

export const ImgBox = styled.div`
  width: 800px; 
  height: 550px;
  background: url('introduce.jpg');
  background-size: cover;
  background-position: center bottom;
  background-repeat: no-repeat;

  @media all and (max-width: 1024px) {
    width: 100%;
  }
`;

export const Text = styled.div`
  position: absolute;
  top: 0; right: 0;
  width: 780px;
  height: auto;

  .intro {
    &_name {
      margin-bottom: 0;
      font-size: 7.5rem;
      font-weight: bold;
      color:#000;
      margin-top: -50px;
    }

    &_title {
      font-size: 5rem;
      font-weight: bold;
      color:#000;
      margin-bottom: 15px;
      margin-top: -10px;
    }

    &_list {
      font-size: 1rem;
      line-height: 25px;
      margin-top: 15px;
      background-color: rgba(255,255,255, 0.3);
      padding: 10px 0 20px 30px;
      font-weight: bold;
    }

    &_item {
      line-height: 23px;
      margin-top: 30px;
      position: relative;

      &::after {
        content: '';
        position: absolute;
        top: -5px; left: -15px;
        width: 8px; 
        height: 8px;
        border-radius: 10px;
        background-color: #ff2817;
      }

      .blog_link {
        color: #4ab0a6;
        text-decoration: underline;
      }
    } 
  }

  @media all and (max-width: 1024px) {
    position: relative;
    padding-left: 20px;

    .intro {
      &_name {
        font-size: 5rem;
        margin-top: 20px;
      }
      &_name {
        font-size: 3rem;
      }
      &_list {
        font-size: 1rem;
        padding: 10px 20px 20px 20px;
      }
    }
  }

  @media all and (max-width: 768px) {
    width: 100%;

    .intro_name { font-size: 3.7rem; }
    .intro_title { font-size: 2.5rem; }
  }

  @media all and (max-width: 425px) {
    .intro_name { font-size: 3rem; }
    .intro_title { font-size: 2rem; }
  }
}
`;

const Introduce = () => {
  return (
    <IntroduceBlock>
      <TitleText> About </TitleText>
      <ImgBox />
      <Text>
        <h3 className="intro_name">YANGHYERIM</h3>
        <h4 className="intro_title">Introduce</h4>
        <ul className="intro_list">
          <li className="intro_item">
            안녕하세요:) <br /> 
            UI개발자(웹퍼블리셔) 경력 4년차 양혜림입니다. <br />
            개발하는 것을 좋아하고 계속해서 공부하며 성장하는 사람입니다. 
          </li>
          <li className="intro_item">
            회사를 다니면서도 업무 능력을 높이기 위해 퇴근 후 학원을 다니거나 스터디를 하였고, <br />
            또한 학점은행제를 병행하여 컴퓨터공학 학사학위를 취득하며 자기계발을 꾸준히 해왔습니다. 
          </li>
          <li className="intro_item">
            기획자, 디자이너, 개발자 등 다양한 실무진분들과 협업 경험이 있어 여러 사람들과 소통할 줄 아는 사람입니다.
          </li>
          <li className="intro_item">
            평소 메모하는 것이 습관화 되어있어 일상, 여행, 개발공부 등을&nbsp; 
            <a href="https://blog.naver.com/did3296" className="blog_link" target="_blank">일상 블로그</a> / &nbsp;
            <a href="https://hyerimiya.notion.site/h1-HYERIM-CODING-h1-9f27a0562a98442fa052be02c2bc3e8e" className="blog_link" target="_blank">개발 블로그</a>에 기록하고있습니다.
          </li>
        </ul>
      </Text>
    </IntroduceBlock> 
  )
}

export default Introduce;