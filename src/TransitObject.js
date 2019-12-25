import React, { useContext } from "react";
import styled from "styled-components";
import SectionContext from "./SectionContext";

import { window } from "browser-monads";

const TransitCore = styled.span`
  ${props =>
    props.disabled
      ? `
    cursor: not-allowed;
    opacity: 0.4;
    text-decoration: line-through;
  `
      : `
    cursor: pointer;
  `}
`;

const TransitObject = ({ children, to, className, disabled }) => {
  const { section, setSection } = useContext(SectionContext);

  const activateButton = () => {
    if (!disabled && section !== to) {
      if (section === "main") {
        setSection(to);
        window.history.pushState("", "", `/${to}`);
        document.getElementById(
          "index"
        ).style.transform = `translate3d(0,-${window.innerHeight}px,0)`;
        document.querySelector("body").style.overflow = "auto";
        setTimeout(() => {
          document.getElementById("main").style.visibility = "hidden";
        }, 800);
      } else if (to === "main") {
        document.querySelector("body").style.overflow = "hidden";
        document.getElementById("main").style.visibility = "visible";
        window.history.pushState("", "", `/`);
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        document.getElementById("index").style.transform = "translate3d(0,0,0)";
        setTimeout(() => {
          setSection("main");
        }, 800);
      } else {
        window.history.pushState("", "", `/${to}`);
        setSection(to);
        window.scrollTo(0, 0);
      }
    }
  };

  return (
    <TransitCore
      role="link"
      tabIndex={disabled ? "-1" : "0"}
      className={className}
      disabled={disabled}
      onClick={activateButton}
      onKeyDown={e => {
        if (e.keyCode === 13) {
          activateButton();
        }
      }}
      aria-label={children}
    >
      {children}
    </TransitCore>
  );
};

export default TransitObject;
