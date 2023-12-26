import React from "react";
import styled from "styled-components";
import { Link  } from "react-router-dom";

const Nav = () => {
  return (
    <NavContainer>
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
    </NavContainer>
  );
};

export default Nav;




const NavWrapper = styled.div`
  /* Your styles for NavWrapper */
`




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
  @media (max-width: 430px) {
    display: flex;
    flex-direction: column; /* Change the layout to a column for smaller screens */
    height: auto; /* Adjust the height as needed */
    gap:10px;

    .wrapper {
      flex-direction: column; /* Stack logo and nav vertically for smaller screens */
      align-items: flex-start; /* Align items to the start for better stacking */
    }

    /* Add styles to the Nav for smaller screens */
    ${NavWrapper} {
      width: 100%; /* Make the Nav take up the full width */
      margin-top: 20px; /* Add some spacing between logo and nav */
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
