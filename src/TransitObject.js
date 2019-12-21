import React, { useContext } from "react";
import styled from "styled-components";
import SectionContext from "./SectionContext";

import { window } from "browser-monads";

const TransitCore = styled.span`
  ${props =>
    props.disabled
      ? `
    cursor: not-allowed;
    opacity: 0.6;
    text-decoration: line-through;
  `
      : `
    cursor: pointer;
  `}
`;

const TransitObject = ({ children, to, className, disabled }) => {
  const { section, setSection } = useContext(SectionContext);

  return (
    <TransitCore
      role="button"
      tabIndex="0"
      className={className}
      disabled={disabled}
      onClick={() => {
        if (!disabled && section !== to) {
          if (section === "main") {
            setSection(to);
            window.history.pushState("", "", `/${to}`);
            document.querySelector(
              "#index"
            ).style.transform = `translate3d(0,-${window.innerHeight}px,0)`;
          } else if (to === "main") {
            window.history.pushState("", "", `/`);
            window.scrollTo(0, 0);
            document.querySelector("#index").style.transform =
              "translate3d(0,0,0)";
            setTimeout(() => {
              setSection("main");
            }, 500);
          } else {
            window.history.pushState("", "", `/${to}`);
            setSection(to);
          }
        }
      }}
    >
      {children}
    </TransitCore>
  );
};

export default TransitObject;
