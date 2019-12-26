import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { window } from "browser-monads";
import Div100vh from "react-div-100vh";
import { graphql, useStaticQuery } from "gatsby";

import SectionContext from "../SectionContext";
import Defaults from "../Defaults";
import FixedTools from "../sections/FixedTools";
import Main from "../sections/Main";
import BottomBase from "../sections/BottomBase";
import Projects from "../sections/Projects";
import Writings from "../sections/Writings";
import Contact from "../sections/Contact";
import ProjectTemplate from "../sections/ProjectTemplate";
import WritingTemplate from "../sections/WritingTemplate";
import formatIndexNum from "../Helpers/formatIndexNum";

const StyledIndex = styled(Div100vh)``;

export default () => {
  const content = useStaticQuery(graphql`
    query {
      allMdx {
        edges {
          node {
            body
            frontmatter {
              type
              path
              index
              title
              tags
              image
              contributions
              tech
              source
              demo
            }
          }
        }
      }
    }
  `).allMdx.edges;
  const projectsContent = content
    .filter(item => item.node.frontmatter.type === "projects")
    .sort((a, b) => a.node.frontmatter.index - b.node.frontmatter.index);
  const writingsContent = content
    .filter(item => item.node.frontmatter.type === "writings")
    .sort((a, b) => a.node.frontmatter.index - b.node.frontmatter.index);

  const projectsIndex = [];
  const projectsArr = [];
  // const writingsIndex = [];
  // const writingsArr = [];

  projectsContent.map((item, idx) => {
    projectsIndex.push({
      path: item.node.frontmatter.path,
      title: item.node.frontmatter.title,
      tags: item.node.frontmatter.tags
    });
    projectsArr.push({
      body: item.node.body,
      path: item.node.frontmatter.path,
      index: item.node.frontmatter.index,
      title: item.node.frontmatter.title,
      image: item.node.frontmatter.image,
      contributions: item.node.frontmatter.contributions,
      tech: item.node.frontmatter.tech,
      source: item.node.frontmatter.source,
      demo: item.node.frontmatter.demo,
      previous:
        idx !== 0 ? projectsContent[idx - 1].node.frontmatter.path : null,
      next:
        idx !== projectsContent.length - 1
          ? projectsContent[idx + 1].node.frontmatter.path
          : null
    });
  });

  const [section, setSection] = useState(
    window.location.pathname.slice(1)
      ? window.location.pathname.slice(1)
      : "main"
  );
  const [theme, setTheme] = useState("theme-one");
  const [isPortrait, setIsPortrait] = useState(
    window.matchMedia("(orientation: portrait)").matches
  );
  const [screenWidth, setScreenWidth] = useState(
    window.matchMedia("(max-width: 375px)").matches
      ? "mobile-very-narrow"
      : window.matchMedia("(max-width: 550px)").matches
      ? "mobile-narrow"
      : window.matchMedia("(max-width: 833px)").matches
      ? "mobile-wide"
      : window.matchMedia("(max-width: 1200px)").matches
      ? "desktop-narrow"
      : "desktop-wide"
  );

  useEffect(() => {
    if (localStorage.getItem("theme")) {
      setTheme(localStorage.getItem("theme"));
    }

    if (window.location.pathname.slice(1)) {
      document.querySelector("body").style.overflow = "auto";
      document.getElementById("main").style.visibility = "hidden";
      document.getElementById(
        "index"
      ).style.transform = `translate3d(0,-${window.innerHeight}px,0)`;
    }
    setTimeout(() => {
      document.getElementById("index").style.transition =
        "transform 0.5s linear";
    }, 100);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("theme", theme);
  }, [theme]);

  useEffect(() => {
    window.onpopstate = function() {
      if (window.location.pathname.slice(1)) {
        if (section === "main") {
          setSection(window.location.pathname.slice(1));
          document.getElementById(
            "index"
          ).style.transform = `translate3d(0,-${window.innerHeight}px,0)`;
          setTimeout(() => {
            document.getElementById("main").style.visibility = "hidden";
          }, 600);
        } else {
          setSection(window.location.pathname.slice(1));
          window.scrollTo(0, 0);
        }
      } else {
        document.getElementById("main").style.visibility = "visible";
        document.getElementById("index").style.transform = "translate3d(0,0,0)";
        setTimeout(() => {
          setSection("main");
        }, 500);
      }
    };
  }, [section]);

  const randomWithinRange = (minBound, maxBound) => {
    return Math.random() * (maxBound - minBound);
  };

  const randomizeUnderlinePath = linkWidth => {
    const yMin = 5;
    const yMax = 12;

    const qXMin = 5 + 0.3 * linkWidth;
    const qXMax = linkWidth - 0.3 * linkWidth;

    const qYMin = 15;
    const qYMax = 25;

    const pathD = `M5 ${randomWithinRange(yMin, yMax)} Q ${randomWithinRange(
      qXMin,
      qXMax
    )} ${randomWithinRange(qYMin, qYMax)} ${linkWidth} ${randomWithinRange(
      yMin,
      yMax
    )}`;
    return pathD;
  };

  const createLinkUnderline = (linkWidth, linkHeight) => {
    const underline = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "svg"
    );
    underline.setAttribute("width", linkWidth);
    underline.setAttribute("height", "20");
    underline.style.top = `${linkHeight - linkHeight * 0.25}px`;
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

    const pathLength = path.getTotalLength();
    path.setAttribute("stroke-dasharray", pathLength);
    path.setAttribute("stroke-dashoffset", pathLength);

    circle.appendChild(path);

    return circle;
  };

  useEffect(() => {
    for (const link of document.querySelectorAll(".link")) {
      const linkWidth = parseInt(link.offsetWidth);
      const linkHeight = parseInt(link.offsetHeight);

      if (link.children.length) {
        link.children[0].setAttribute("width", linkWidth);
        link.children[0].style.top = `${linkHeight - linkHeight * 0.25}px`;
        link.children[1].setAttribute("width", linkWidth + 25);
        link.children[1].setAttribute("height", linkHeight + 20);
      } else {
        const underline = createLinkUnderline(linkWidth, linkHeight);
        const circle = createLinkCircle(linkWidth, linkHeight);
        link.appendChild(underline);
        link.appendChild(circle);
      }
    }
  }, [section, screenWidth]);

  const resizeMainVisual = () => {
    if (section === "main") {
      const brainwave = document.querySelector(".brainwave");
      const mainTextBlockHeight = document.querySelector(".main-text-block")
        .offsetHeight;

      brainwave.style.height = `${(mainTextBlockHeight / 5) * 9}px`;
    }
  };

  var scheduledAnimationFrameForResize;

  const onWindowResize = () => {
    if (scheduledAnimationFrameForResize) {
      return;
    }
    scheduledAnimationFrameForResize = true;
    requestAnimationFrame(() => {
      setScreenWidth(
        window.matchMedia("(max-width: 375px)").matches
          ? "mobile-very-narrow"
          : window.matchMedia("(max-width: 550px)").matches
          ? "mobile-narrow"
          : window.matchMedia("(max-width: 833px)").matches
          ? "mobile-wide"
          : window.matchMedia("(max-width: 1200px)").matches
          ? "desktop-narrow"
          : "desktop-wide"
      );

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

      scheduledAnimationFrameForResize = false;
    });
  };

  useEffect(() => {
    resizeMainVisual();

    window.addEventListener("resize", onWindowResize);

    return () => {
      window.removeEventListener("resize", onWindowResize);
    };
  }, [isPortrait, section]);

  const renderBottom = section => {
    if (section === "main") {
      return <BottomBase title={""} isPortrait={isPortrait} />;
    } else if (section === "projects") {
      return (
        <>
          <BottomBase title={"Projects"} isPortrait={isPortrait} />
          <Projects projectsIndex={projectsIndex} />
        </>
      );
    } else if (section === "writings") {
      return (
        <>
          <BottomBase title={"Writings"} isPortrait={isPortrait} />
          <Writings />
        </>
      );
    } else if (section === "contact") {
      return (
        <>
          <BottomBase title={"Contact"} isPortrait={isPortrait} />
          <Contact />
        </>
      );
    } else if (section.match(/projects\/[a-zA-Z0-9-]+$/g)) {
      const project = projectsArr.find(
        project => project.path === section.slice(9)
      );

      if (project) {
        return (
          <>
            <BottomBase
              title={`Project-${formatIndexNum(project.index)}`}
              isPortrait={isPortrait}
            />
            <ProjectTemplate project={project} />
          </>
        );
      } else {
        return null;
      }
    } else if (section.match(/writings\/[a-zA-Z0-9-]+$/g)) {
      return <WritingTemplate />;
    }
  };

  return (
    <>
      <SectionContext.Provider
        value={{
          section,
          setSection
        }}
      >
        <Defaults />
        <FixedTools theme={theme} setTheme={setTheme} />
        <StyledIndex id="index">
          <Main isPortrait={isPortrait} />
          {renderBottom(section)}
        </StyledIndex>
      </SectionContext.Provider>
    </>
  );
};
