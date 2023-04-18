import React from "react";
import styled from "styled-components";
const LabelStyle = styled.div`
  color: ${(props) => props.theme.gray4b};
  font-weight: 500;
  font-size: 14px;
  cursor: pointer;
`;
const Label = ({ children, htmlFor = "", ...props }) => {
  return (
    <LabelStyle htmlFor={htmlFor} {...props}>
      {children}
    </LabelStyle>
  );
};

export default Label;
