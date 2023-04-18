import React from "react";
import styled from "styled-components";
const LableStyle = styled.div`
  color: ${(props) => props.theme.gray4b};
  font-weight: 500;
  font-size: 14px;
  cursor: pointer;
`;
const Label = ({ children, htmlFor = "", ...props }) => {
  return (
    <LableStyle htmlFor={htmlFor} {...props}>
      {children}
    </LableStyle>
  );
};

export default Label;
