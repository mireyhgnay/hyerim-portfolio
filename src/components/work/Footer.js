import React from 'react';
import styled, { keyframes } from "styled-components";

const typing = keyframes`
  0% { width: 0; }
  30% { width: 100%; }
  50% { width: 100%; }
  60% { width: 100%; }
  80% { width: 0%; }
  100% { width: 0%; }
`;

const blinkCaret = keyframes`
  from,
  to { border-color: transparent; }
  50% { border-color: #2b2b2d; }
`;

const FooterBlock = styled.footer`
  padding-bottom: 80px; 

  .footer_text {
    font-size: 24px;
    color: #2b2b2d;
    letter-spacing: 1px;
    overflow: hidden;
    border-right: 0.1em solid black;
    white-space: nowrap;
    animation: ${typing} 7s steps(40, end) infinite,
      ${blinkCaret} 1s step-start infinite;
    max-width: 520px; 
    margin: 0 auto;
  }


  @media all and (max-width: 600px) {
    .footer_text { font-size: 20px; max-width: 435px; } 
  }

  @media all and (max-width: 470px) {
    .footer_text { font-size: 15px; } 
  }
  
  @media all and (max-width: 355px) {
    .footer_text { font-size: 13px; max-width: 300px; } 
  }
`;

const Footer = () => {
  return (
    <FooterBlock>
        <p className="footer_text">Thank you for taking a look at my portfolio:)</p>
    </FooterBlock>
  )
}

export default Footer;