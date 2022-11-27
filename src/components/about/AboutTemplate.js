import React from 'react';
import { Wrapper } from '../common/CommonStyles';
import Career from './Career';
import Favorite from './Favorite';
import Introduce from './Introduce'
import Question2 from './Question2';

const AboutTemplate = () => {
  return (
    <Wrapper>
      <Introduce />
      <Favorite />
      <Career />
      <Question2 />
    </Wrapper>
  )
}

export default AboutTemplate;