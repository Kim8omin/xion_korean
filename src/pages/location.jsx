import React from 'react';
import KakaoLocation from '../components/main/kakaoLocation';
import contact from "../../src/assets/contact.png";
import styled from 'styled-components';


const Location = () => {
    return (
        <LocationLayer>
        <h4 style={{color:'white', fontSize:'20px', marginLeft: '30px' }}>찾아오시는 길</h4>
        <p style={{color:'white', marginLeft: '30px' }}>서울시 광진구 광나루로 43길 83, 101호 (구의동 222-5) 우편번호 05041</p>
        <LocationWrapper>
        <KakaoLocation/>
        <img src={contact} alt='location' width='600px'/>
        </LocationWrapper>
        </LocationLayer>
       
    );
};

export default Location;

const LocationLayer =styled.div`
display: flex;
flex-wrap: wrap;
flex-direction: column;
gap: 30px;
margin: 50px;

@media (max-width: 768px) {
    width:100%
    height: auto;
  }
  @media (max-width: 430px) {
    width:100%;
    display: flex;
    flex-wrap: wrap;
  }

  h4, p {
    @media (max-width: 768px) {
        width:100%
        height: auto;
      }
      @media (max-width: 430px) {
        width:65%;
        display: flex;
        flex-wrap: wrap;
        text-align: center;
      }
  }
`

const LocationWrapper =styled.div`
display: flex;
flex-wrap: wrap;
flex-direction: row;
justify-content: center;
gap:30px;

@media (max-width: 768px) {
    width:100%
    height: auto;
  }
  @media (max-width: 430px) {
    width:100%;
    display: flex;
    flex-wrap: wrap;
  }

`