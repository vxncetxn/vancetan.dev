import React from "react";
import styled from "styled-components";

const Highlight = styled.span`
  color: var(--color-highlighted-text);
  background-color: var(--color-layer-top);
  transition: background-color 0.6s ease-out;
`;

const HighlightComp = ({ children }) => {
  return <Highlight>{children}</Highlight>;
};

export default HighlightComp;
