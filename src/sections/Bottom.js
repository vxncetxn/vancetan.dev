import React from "react";
import styled from "styled-components";

const Bottom = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  transform: translate3d(0, calc(var(--vh) * 100), 0);
  visibility: hidden;
`;

const BottomComp = ({ children }) => {
  return <Bottom id="bottom">{children}</Bottom>;
};

export default BottomComp;
