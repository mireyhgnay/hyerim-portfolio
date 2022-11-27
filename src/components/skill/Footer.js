import React from 'react';
import styled from 'styled-components';

const FooterBlock = styled.footer`
  width: 100%;
  position: relative;
  margin-top: 150px;

  .footer_inner {
    position: absolute;
    bottom: -30px;
    left: 80px;
    width: 100%;
    height: 80px;
    display: flex;
    flex-direction: row;
    overflow: hidden;
  }

  .footer_text {
    color: #ff2817;
    font-weight: bold;
    font-size: 7rem;
    margin-right: 50px;
  }

  @media all and (max-width: 1024px) {
    .footer_inner { height: 60px; }
    .footer_text { font-size: 5rem; }
  }
  @media all and (max-width: 700px) {
    .footer_inner { height: 50px; left: 40px; }
    .footer_text { font-size: 4rem; }
  }
  @media all and (max-width: 425px) {
    .footer_inner { height: 35px; }
    .footer_text { font-size: 2.5rem; }
  }
`;

const Footer = () => {
  return (
    <FooterBlock>
      <div className="footer_inner">
        <span className="footer_text">ANIMATION</span>
        <span className="footer_text">FRONTEND</span>
        <span className="footer_text">COMMUNICATION</span>
      </div>
    </FooterBlock>
  )
}

export default Footer;