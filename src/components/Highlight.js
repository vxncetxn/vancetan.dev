import React from "react";
import styled from "styled-components";

const Highlight = styled.span`
  color: var(--color-highlighted-text);
  background-color: var(--color-layer-top);
`;

const HighlightComp = ({ children }) => {
  return <Highlight>{children}</Highlight>;
};

export default HighlightComp;
