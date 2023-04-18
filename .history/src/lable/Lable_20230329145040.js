import React from "react";
import styled from "styled-components";
const LableStyle = styled.div``;
const Lable = ({ children, htmlFor = "", ...props }) => {
  return (
    <LableStyle htmlFor={htmlFor} {...props}>
      {children}
    </LableStyle>
  );
};

export default Lable;
