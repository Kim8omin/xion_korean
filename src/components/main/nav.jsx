import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import MediaQuery from "react-responsive";
import hamburger from "../../assets/hamburger.png";

const Nav = () => {
  const [toggle, setToggle] = useState(false);

  const onToggle = () => {
    setToggle(!toggle);
    };

  return (
    <NavContainer>
      <MediaQuery minWidth={431}>
        <span>
          <NavLink to={"/contact"}>
            <NavText>Contact</NavText>
          </NavLink>
        </span>
        <span>
          <NavLink to={"/location"}>
            <NavText>Location</NavText>
          </NavLink>
        </span>
      </MediaQuery>
      <MediaQuery maxWidth={430}>
        <MobileLayer toggle={toggle}>
          <img
            src={hamburger}
            alt="hamburger"
            onClick={onToggle}
            width="30px"
          />
          </MobileLayer>
          {toggle && <Overlay onClick={onToggle}/>}
          {toggle && (
            <NavWrapped>
              <div className="division-line"></div>
              <span>
                <NavLink to={"/contact"} onClick={onToggle}>
                  <NavText>Contact</NavText>
                </NavLink>
              </span>
              <div className="division-line"></div>
              <span>
                <NavLink to={"/location"} onClick={onToggle}>
                  <NavText>Location</NavText>
                </NavLink>
              </span>
              <div className="division-line"></div>
            </NavWrapped>
          )}
      </MediaQuery>
    </NavContainer>
  );
};

export default Nav;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: -1;
`;

const NavWrapper = styled.div`
  /* Your styles for NavWrapper */
`;

const NavContainer = styled.div`
	width: 100%;
	margin: 0 auto;
  padding-right:50px;
	height: 35px;
	align-items: center;
  justify-content: flex-end;
  display: flex;
	flex- direction: row;
  gap: 20px;

   

    @media (max-width: 1024px) {
	}
	@media (max-width: 768px) {
		height: auto;
	}
  
  }

`;

const NavLink = styled(Link)`
  text-decoration: none;
`;

const NavText = styled.h4`
  color: white;
  &:hover {
    color: yellow;
  }
`;

const MobileLayer = styled.div`
  display: ${({toggle})=>(toggle? "none":"flex")};
`;

const NavWrapped = styled.div`
position: absolute; 
top: 100%; 
left: 0; 
flex-direction: column;
width: 100%;
background-color: black;
color: white;
text-align:center;
line-height: 3;

.division-line {
  border-top: 1px solid #444444;
  
}
`;
