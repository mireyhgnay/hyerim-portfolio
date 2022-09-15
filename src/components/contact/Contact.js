import React from 'react';
import styled from 'styled-components';

const ContactBlock = styled.section`
  width: 100%;
  height: auto;
`;

const Title = styled.h1`
  width: 70%;
  height: auto;
  margin: 0 auto;
  background-color: #ff2817;
  text-align: center;
  font-size: 5.5rem;
  font-weight: bold;
  transition: 0.3s;
  color: #FFF;
  padding: 10px 0;
  letter-spacing: 2px;

  @media all and (max-width: 1024px) {
    text-align: center;

    .title { font-size: 4.2rem; }
  }
  @media all and (max-width: 750px) { 
    .title { font-size: 3rem; }
  }  
  @media all and (max-width: 580px) {
    .title { font-size: 2rem; }
  }
  @media all and (max-width: 320px) {
    .title { font-size: 1rem; }
  }
`;

const ContactList = styled.div`
  width: 70%; 
  height: auto;
  margin: 0 auto;
  padding-bottom: 100px;

  .contact {
    &_list {
      width: 100%;
      height: auto;
      text-align: center;
    }

    &_item {
      font-size: 40px;
      line-height: 100px;
      font-weight: bold;
      letter-spacing: 2px;
      border-bottom: 1px solid rgba(0,0,0,0.2);

      &:hover {
        background-color: rgba(183,183,183,0.1);
        color: #ff2817;
        transition: 0.4s;
      }
    }

    &_link {
      display: block;
    }
  }

    @media all and (max-width: 1024px) {
      text-align: center;
      .contact_list {
        width: 100%;
      }
      .contact_link {
        font-size: 35px;
      }
    }
    @media all and (max-width: 750px) { 
      .contact_link {
        font-size: 30px;
        line-height: 80px;
      }
    }  
    @media all and (max-width: 580px) {
      .contact_link {
        font-size: 20px;
        line-height: 70px;
      }
    }
`;

const Contact = () => {
  return (
    <ContactBlock>
      <Title>CONTACT ME</Title>

      <ContactList>
        <ul className="contact_list">
          <li className="contact_item">
            <a href="mailto: hyerimiya1216@gmail.com" className="contact_link" target="_blank">hyerimiya1216@gmail.com</a>
          </li>
          <li className="contact_item">
            <a href="https://github.com/mireyhgnay" className="contact_link" target="_blank">Github</a>
          </li>
          <li className="contact_item">
            <a href="https://hyerimiya.notion.site/h1-HYERIM-CODING-h1-9f27a0562a98442fa052be02c2bc3e8e" className="contact_link" target="_blank">Dev Blog</a>
          </li>
          <li className="contact_item">
            <a href="https://blog.naver.com/did3296" className="contact_link" target="_blank">Daily Blog</a>
          </li>
        </ul>
      </ContactList>
    </ContactBlock>
  )
}

export default Contact;

