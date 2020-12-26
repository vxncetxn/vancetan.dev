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
      const cache = window.domCache;

      if (section === "main") {
        setSection(to);
        window.history.pushState("", "", `/${to}/`);

        requestAnimationFrame(() => {
          cache.main.style.transform = `translate3d(0,calc(var(--vh) * -100),0)`;
          cache.bottom.style.transform = `translate3d(0,0,0)`;
          cache.body.style.overflow = "auto";
        });

        setTimeout(() => {
          cache.main.style.visibility = "hidden";
        }, 800);
      } else if (to === "main") {
        cache.body.style.overflow = "hidden";
        cache.main.style.visibility = "visible";
        window.history.pushState("", "", `/`);
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });

        cache.main.style.transform = `translate3d(0,0,0)`;
        cache.bottom.style.transform = `translate3d(0,calc(var(--vh) * 100),0)`;

        setTimeout(() => {
          setSection("main");
        }, 800);
      } else {
        window.history.pushState("", "", `/${to}/`);
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
