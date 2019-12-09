import React, { useContext } from "react";
import styled from "styled-components";
import SectionContext from "./SectionContext";

import { window } from "browser-monads";

const StyledTransitButton = styled.button``;

const TransitButton = ({ children, to, circled }) => {
  const { section, setSection } = useContext(SectionContext);

  return (
    <StyledTransitButton
      className={`link ${circled ? "circled" : null}`}
      onClick={() => {
        if (section !== to) {
          if (section === "main") {
            setSection(to);
            window.history.pushState("", "", `/${to}`);
            document.querySelector("#bottom-base").style.display = "block";
            document.querySelector(
              "#index"
            ).style.transform = `translate3d(0,-${window.innerHeight}px,0)`;
          } else if (to === "main") {
            window.history.pushState("", "", `/`);
            window.scrollTo(0, 0);
            document.querySelector("#index").style.transform =
              "translate3d(0,0,0)";
            setTimeout(() => {
              document.querySelector("#bottom-base").style.display = "none";
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
    </StyledTransitButton>
  );
};

export default TransitButton;
