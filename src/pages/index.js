import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { window } from "browser-monads";
import Div100vh from "react-div-100vh";

import Defaults from "../Defaults";
import FixedTools from "../sections/FixedTools";
import Main from "../sections/Main";
import BottomBase from "../sections/BottomBase";
import Projects from "../sections/Projects";
import Writings from "../sections/Writings";
import Contact from "../sections/Contact";
import SectionContext from "../SectionContext";

const StyledIndex = styled(Div100vh)`
  // overflow-y: hidden;
  // transform: translateY(-100vh);
  transition: transform 0.5s linear;
`;

export default () => {
  const [isPortrait, setIsPortrait] = useState(
    window.matchMedia("(orientation: portrait)").matches
  );

  const [section, setSection] = useState(
    window.location.pathname.slice(1)
      ? window.location.pathname.slice(1)
      : "main"
  );

  useEffect(() => {
    if (window.location.pathname.slice(1)) {
      document.querySelector("#bottom-base").style.display = "block";
      document.querySelector("#index").style.transform = "translateY(-100vh)";
    }
  }, []);

  const randomWithinRange = (minBound, maxBound) => {
    return Math.random() * (maxBound - minBound);
  };

  const randomizeUnderlinePath = linkWidth => {
    let yMin = 5;
    let yMax = 12;

    let qXMin = 5 + 0.3 * linkWidth;
    let qXMax = linkWidth - 0.3 * linkWidth;

    let qYMin = 15;
    let qYMax = 25;

    let pathD = `M5 ${randomWithinRange(yMin, yMax)} Q ${randomWithinRange(
      qXMin,
      qXMax
    )} ${randomWithinRange(qYMin, qYMax)} ${linkWidth} ${randomWithinRange(
      yMin,
      yMax
    )}`;
    return pathD;
  };

  const createLinkUnderline = linkWidth => {
    const underline = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "svg"
    );
    underline.setAttribute("width", linkWidth);
    underline.setAttribute("height", "20");
    underline.setAttribute("class", "link-underline-svg");

    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    var pathD = randomizeUnderlinePath(linkWidth);

    path.setAttribute("class", "link-underline-path");
    path.setAttribute("d", pathD);

    underline.appendChild(path);

    return underline;
  };

  const createLinkCircle = (linkWidth, linkHeight) => {
    const circle = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "svg"
    );
    circle.setAttribute("width", linkWidth + 25);
    circle.setAttribute("height", linkHeight + 20);
    circle.setAttribute("viewBox", "0 0 312.98 123.79");
    circle.setAttribute("preserveAspectRatio", "none");
    circle.setAttribute("class", "link-circle-svg");

    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");

    var pathD = `
        m311.69 42.32
        a530.14 530.14 0 0 0 -165.94-18.2
        c-6.34.32-138 7.57-140.69 35.75-2.18 22.6 79.05 53.46 152.43 58.13 43.71 2.81
        129-.81 136.81-33.15 7.7-31.85-64.3-74.32-75.02-80.5
    `;

    path.setAttribute("class", "link-circle-path");
    path.setAttribute("d", pathD);

    let pathLength = path.getTotalLength();
    path.setAttribute("stroke-dasharray", pathLength);
    path.setAttribute("stroke-dashoffset", pathLength);

    circle.appendChild(path);

    return circle;
  };

  useEffect(() => {
    document.querySelectorAll(".link").forEach(link => {
      let linkWidth = parseInt(link.offsetWidth);
      let linkHeight = parseInt(link.offsetHeight);

      let underline = createLinkUnderline(linkWidth);
      let circle = createLinkCircle(linkWidth, linkHeight);
      link.appendChild(underline);
      link.appendChild(circle);
    });
  }, []);

  const resizeMainVisual = () => {
    const brainwave = document.querySelector(".brainwave");
    const mainTextBlockHeight = document.querySelector(".main-text-block")
      .offsetHeight;
    const headImageContainer = document.querySelector(".head-image-container");
    const bottomImageContainer = document.querySelector(
      ".bottom-image-container"
    );

    brainwave.style.height = `${(mainTextBlockHeight / 5) * 9}px`;

    let headImageContainerHeight;
    let headImageContainerWidth;
    if (window.innerWidth > 550) {
      headImageContainerHeight = Math.max(
        window.innerHeight - mainTextBlockHeight - 60,
        250
      );
    } else {
      headImageContainerHeight = Math.max(
        window.innerHeight - mainTextBlockHeight - 100,
        150
      );
    }

    if (window.matchMedia("(orientation: portrait)").matches) {
      headImageContainerWidth = headImageContainerHeight * 0.83415;
    } else {
      headImageContainerWidth = headImageContainerHeight * 1.19882;
    }

    headImageContainer.style.height = `${headImageContainerHeight}px`;
    headImageContainer.style.width = `${headImageContainerWidth}px`;

    let bottomImageContainerWidth = headImageContainerWidth;
    let bottomImageContainerHeight;

    if (window.matchMedia("(orientation: portrait)").matches) {
      bottomImageContainerHeight = bottomImageContainerWidth / 1.19601;
    } else {
      bottomImageContainerHeight = bottomImageContainerWidth / 1.71429;
    }

    bottomImageContainer.style.height = `${bottomImageContainerHeight}px`;
    bottomImageContainer.style.width = `${bottomImageContainerWidth}px`;
  };

  const onWindowResize = () => {
    if (isPortrait) {
      if (window.matchMedia("(orientation: landscape)").matches) {
        setIsPortrait(!isPortrait);
      }
    } else {
      if (window.matchMedia("(orientation: portrait)").matches) {
        setIsPortrait(!isPortrait);
      }
    }

    resizeMainVisual();
  };

  useEffect(() => {
    resizeMainVisual();

    window.addEventListener("resize", onWindowResize);

    return () => {
      window.removeEventListener("resize", onWindowResize);
    };
  }, [isPortrait]);

  return (
    <>
      <SectionContext.Provider
        value={{
          section,
          setSection
        }}
      >
        <Defaults />
        <FixedTools />
        <StyledIndex id="index">
          <Main isPortrait={isPortrait} />
          <BottomBase isPortrait={isPortrait} />
          {section === "projects" ? (
            <Projects />
          ) : section === "writings" ? (
            <Writings />
          ) : (
            <Contact />
          )}
        </StyledIndex>
      </SectionContext.Provider>
    </>
  );
};
