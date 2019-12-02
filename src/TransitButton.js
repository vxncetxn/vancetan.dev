import React, { useContext } from "react";
import styled from "styled-components";
import SectionContext from "./SectionContext";

import { window } from "browser-monads";

const StyledTransitButton = styled.button``;

const TransitButton = ({ children, to }) => {
  const { section, setSection } = useContext(SectionContext);

  return (
    <StyledTransitButton
      className="link"
      onClick={() => {
        if (section !== to) {
          if (section === "main") {
            setSection(to);
            window.history.pushState("", "", `/${to}`);
            document.querySelector("#bottom-base").style.display = "block";
            document.querySelector("#index").style.transform =
              "translateY(-100vh)";
          } else if (to === "main") {
            window.history.pushState("", "", `/`);
            document.querySelector("#index").style.transform =
              "translateY(0vh)";
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
