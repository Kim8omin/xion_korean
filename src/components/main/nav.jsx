import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import MediaQuery from "react-responsive";
import hamburger from "../../assets/hamburger.png";

const Nav = () => {
  const [toggle, setToggle] = useState(false);

  const onToggle = () => {
    if (!toggle) {
      setToggle(true);
    } else {
      setToggle(false);
    }
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
        <MobileLayer>
          <img
            src={hamburger}
            alt="hamburger"
            onClick={onToggle}
            width="30px"
          />

          {toggle && (
            <NavWrapped>
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
            </NavWrapped>
          )}
        </MobileLayer>
      </MediaQuery>
    </NavContainer>
  );
};

export default Nav;

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
  display: flex;
`;

const NavWrapped = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  color: yellow;
`;
