import React from 'react';
import styled from 'styled-components';

const SkillsBlock = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  width: 100%;
  margin-top: 100px;
  padding: 0 80px;

  @media all and (max-width:1200px) {
    padding: 0 20px;
  }
  @media all and (max-width:1024px) {
    display: block;
  }
`;

const LanguageBox = styled.div`
  width: 37%;

  .skill_list {
    width: 100%;
    line-height: 55px;

    > li {
      font-size: 40px;
    }

    .skill_etc {
      font-size: 25px;
      line-height: 25px;
      margin-top: 20px;
      color: gray;
    }
  }

  @media all and (max-width:1024px) {
    width: 100%;
    margin-bottom: 80px;
    padding-top: 50px; 

    li {
      text-align: center;
      font-size: 35px;
    }
  }
`;

const ImgBox = styled.div`
  width: 700px;
  height: 500px;
  background: url('skill_img.gif');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  @media all and (max-width:1200px) {
    width: 600px;
    height: 450px;
    margin: 0 auto;
  }
  @media all and (max-width:1024px) {
    width: 500px;
    height: 350px;
  }
  @media all and (max-width: 550px) {
    width: 100%;
  }
`;

const Skills = () => {
  return (
    <SkillsBlock>
      <LanguageBox>
        <ul className="skill_list">
          <li>HTML5</li>
          <li>CSS3</li>
          <li>SASS/SCSS</li>
          <li>JavaScript</li>
          <li>JQuery</li>
          <li>Git</li>
          <li>React</li>
          <li>Zeplin/Figma</li>
          <li>Photoshop</li>
          <li>Illustrator</li>
          <li>Jira/Bitbucket/Wiki</li>
          <li className="skill_etc">Gulp, Webpack, React-icons, styled-components, heroku</li>
        </ul>
      </LanguageBox>

      <ImgBox />
    </SkillsBlock>
  )
}

export default Skills;