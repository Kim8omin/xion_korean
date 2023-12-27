import React from "react";
import styled from "styled-components";
import phone from "../../assets/phone.png";
import location from "../../assets/location.png";
import envelop from "../../assets/envelop.png";
import kakao from "../../assets/kakao.png";

const ContactComponent = () => {
  return (
    <ContactCompoWrap>
      <h6 id="contactTitle">
        당신의 디자인에 <br />
        날개를 달아드립니다
      </h6>
      <ContactLayer>
        <ContactWrapper>
          <ContactInfo>
            <Icon src={phone} alt="phone" />
            <div>
              <p>010-9460-5101</p>
              <p>02-6408-6834</p>
            </div>
          </ContactInfo>
          <ContactInfo>
            <Icon src={kakao} alt="kakao" />
            <p>xion_</p>
          </ContactInfo>
            <ContactInfo>
            <Icon src={envelop} alt="envelop" />
            <p>x-ion@naver.com</p>
          </ContactInfo>
        </ContactWrapper>

        <AddressLayer>
          <LocationInfo>
            <Icon src={location} alt="location" />
            <div>
              <h6>서울 사무실</h6>
              <p>
                서울시 광진구 광나루로 43길 83, 101호 (구의동 222-5) 우편번호
                05041
              </p>
            </div>
          </LocationInfo>

          <LocationInfo className="global">
            <Icon src={location} alt="location" />
            <div>
              <h6>광저우 지사</h6>
              <p>중국 광동성 광저우시 백운구 삼원리 성풍빌딩, 212호</p>
            </div>
          </LocationInfo>
        </AddressLayer>
      </ContactLayer>
    </ContactCompoWrap>
  );
};

export default ContactComponent;

const ContactCompoWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #231e20;
  gap: 25px;
  padding: 20px;
  margin: 70px;
  height: 300px;

  #contactTitle {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 24px;
    text-align: center;
    margin-bottom: 20px;
    line-height: 1.3;
  }
`;

const ContactLayer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ContactWrapper = styled.div`
  display: flex;
  flex-direction: column; /* Change to column for smaller screens */
  align-items: center;
  margin-bottom: 20px;
  gap:8px;

  @media screen and (min-width: 430px) {
    flex-direction: row; /* Change back to row for larger screens */
  }
`;

const ContactInfo = styled.div`
  display: flex;
  align-items: center;
  margin-right: 20px;
  

  img {
    width: 20px;
    margin-right: 10px;
  }

  p {
    color: white;
    font-family: "Open Sans", Arial, sans-serif;
    line-height: 1.3;
  }
`;

const AddressLayer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 15.2px;

  .global {
    margin-top: 20px;
  }
`;

const LocationInfo = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 20px;

  img {
    width: 20px;
    margin-right: 10px;
  }

  h6 {
    color: white;
    line-height: 1.5;
  }

  p {
    color: white;
    font-family: "Open Sans", Arial, sans-serif;
    line-height: 1.2;
  }
`;

const Icon = styled.img`
  width: 20px;
  margin-right: 10px;
`;
