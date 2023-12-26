import React from "react";
import brochure from "../../src/assets/brochure.jpeg";
import styled from "styled-components";

const KBrochure = () => {
  return (
    <Brochure>
      <img src={brochure} alt="brochure_img" />
    </Brochure>
  );
};

export default KBrochure;

const Brochure = styled.div`
  margin: 0 auto;
  display: flex;

  img {
    width: 100%; /* Make the image take up 100% of the container width */
    height: auto; /* Maintain the aspect ratio */
  }

  @media (max-width: 430px) {
    img {
      max-width: 100%; /* Ensure the image doesn't exceed the viewport width */
    }
  }
`;
