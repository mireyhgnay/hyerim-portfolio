/* 
Section2 :: About (좋아하는 것 & 습관)
Travel(여행) / ESFJ(MBTI) / Memo(메모하는 습관)  
*/
import React from 'react';
import styled from 'styled-components';

const FavoriteBlock = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%; 
  height: auto;
  padding: 0 80px;
  margin-top: 100px;

  @media all and (max-width: 1024px) {
    padding: 0 20px;
  }

  @media all and (max-width: 768px) {
    flex-direction: column;
  }
`;

const Box = styled.article`
  width: 30%;
  height: 450px;
  text-align: center;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media all and (max-width: 768px) {
    height: 400px;
    width: 100%;
    margin-top: 10px;
  }

`;

const Inner = styled.div`
  position: absolute;
  left: 0; top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  background-color: rgba(0,0,0,0.5);

  .favorite {
    &_title {
      height: auto;  
      font-size: 60px;
      color: #FFFFFF;
      margin: 0;
    }
    &_text {
      font-size: 20px;
      color: #FFFFFF;
      margin-top: 10px;
      line-height: 30px;
    }
    &_desc {
      font-size: 17px;
      color: #FFFFFF;
      margin-top: 10px;
      line-height: 30px;
    }
  }

  @media all and (max-width: 1024px) {
    .favorite_title { font-size: 40px; }
    .favorite_text { font-size: 15px; line-height: 25px; }
  }

  @media all and (max-width: 768px) {
    .favorite_title { font-size: 40px; }
    .favorite_text{ font-size: 15px; line-height: 20px; }
  }

  @media all and (max-width: 320px) {
    .favorite_text{ display: none; }
  }
`;

const Favorite = () => {
  return (
    <FavoriteBlock>
      <Box>
        <img src="travel.jpg" alt="여행 사진" />
        <Inner>
          <strong className="favorite_title">TRAVEL</strong>
          <p className="favorite_text">제일 좋아하는 것 "여행"</p>
          <p className="favorite_desc">
            여행으로 얻게되는 다양한 경험을 좋아하고,<br />
            그때의 추억으로 살아갑니다
          </p>
        </Inner>
      </Box>

      <Box>
        <img src="cafe.jpg" alt="내 사진" />
        <Inner>
          <strong className="favorite_title">ESFJ</strong>
          <p className="favorite_text">"MBTI"</p>
          <ul className="favorite_desc">
            <li>E 외향형</li>
            <li>S 감각형</li>
            <li>F 감정형</li>
            <li>J 계획형</li>
          </ul>
        </Inner>
      </Box>
      
      <Box>
        <img src="memo.jpg" alt="메모 사진" />
        <Inner>
          <strong className="favorite_title">MEMO</strong>
          <p className="favorite_text">"메모" 하는 습관</p>
          <p className="favorite_desc">
            시간을 효율적으로 관리하기 위해<br />매일 체크리스트를 적고, <br />
            하루, 한달, 1년 목표를 기록하며 계획합니다
          </p>
        </Inner>
      </Box>
    </FavoriteBlock>
  )
}

export default Favorite;