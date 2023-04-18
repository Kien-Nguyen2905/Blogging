import React from "react";
import styled from "styled-components";
const HeadingStyles = styled.h2`
  font-size: 28px;
  position: relative;
  margin-bottom: 30px;
  font-weight: 600;
  color: #3a1097;
  &::before {
    display: block;
    content: "";
    width: 35px;
    height: 3px;
    border-radius: 1px;
    background-color: #00d1ed;
  }
  @media screen and (max-width: 1023.98px) {
    font-size: 22px;
    margin-bottom: 20px;
  }
`;
const Heading = ({ className = "", children }) => {
  return <HeadingStyles className={className}>{children}</HeadingStyles>;
};

export default Heading;
