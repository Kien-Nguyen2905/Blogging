import React from "react";
import styled from "styled-components";
const HeadingStyled = styled.h2`
  font-size: 28px;
  position: relative;
  margin-bottom: 30px;
  font-weight: 600;
  @media screen and (max-width: 1023.98px) {
    font-size: 22px;
    margin-bottom: 20px;
  }
`;
const Heading = ({ className = "", children }) => {
  return <HeadingStyled className={className}>{children}</HeadingStyled>;
};

export default Heading;
