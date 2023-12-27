import React, { useState } from "react";
import { Link } from "react-router-dom";
import hamburger from "../../assets/hamburger.png";
import styled from "styled-components";

const MobileNav = () => {
  const [toggle, setToggle] = useState(false);

  const onToggle = () => {
    setToggle(true);
  };

  return (
    <MobileLayer>
      <img src={hamburger} alt="hamburger" onClick={onToggle} />
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
  );
};

export default MobileNav;

const MobileLayer = styled.div`;
width: 100%;
`

const NavWrapped = styled.div`
display: flex;
width: 60%;
color: #231E20; 
`;
