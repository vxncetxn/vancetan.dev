import React, { useEffect } from "react";

import Defaults from "../Defaults";
import Main from "../sections/Main";

export default () => {
  const randomWithinRange = (minBound, maxBound) => {
    return Math.random() * (maxBound - minBound);
  };

  const randomizePath = linkWidth => {
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
    var pathD = randomizePath(linkWidth);

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
    circle.setAttribute("width", linkWidth + 20);
    circle.setAttribute("height", linkHeight + 20);
    circle.setAttribute("viewBox", "0 0 312.98 123.79");
    circle.setAttribute("preserveAspectRatio", "none");
    circle.setAttribute("class", "link-circle-svg");

    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    var pathD = `
        M449.78,395.65
        a530.08,530.08,0,0,0-165.93-18.19
        c-6.34.32-138,7.57-140.69,35.75-2.18,22.6,79,53.46,152.43,58.17,43.71,2.81,
        129-.81,136.8-33.15,7.71-31.92-64.33-74.36-75-80.54
    `;

    path.setAttribute("transform", "translate(-138.12 -353.36)");
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

  return (
    <>
      <Defaults />
      <Main />
    </>
  );
};
