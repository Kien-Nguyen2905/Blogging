import React from "react";
import styled from "styled-components";
import "./index.css";
const LoadingStyled = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Loading = () => {
  return (
    <LoadingStyled>
      <div class="loader">
        <div class="scanner">
          <span>Loading...</span>
        </div>
      </div>
    </LoadingStyled>
  );
};

export default Loading;
