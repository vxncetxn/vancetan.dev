import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import { window } from "browser-monads";
import Div100vh from "react-div-100vh";

import Brainwave from "../assets/graphics/brainwave-vA.svg";

const StyledMain = styled(Div100vh)`
  position: relative;
`;

const StyledBrainwave = styled(Brainwave)`
  position: absolute;
  left: 0;
  top: 0;
  width: 100vw;
  height: 70vh;
  z-index: -1;
`;

const MainTextBlock = styled.main`
  width: 45vw;
  margin: 0 auto;
  padding-top: 80px;

  @media (max-width: 833px) {
    padding-top: 40px;
  }

  @media (max-width: 480px) {
    padding-top: 20px;
  }
`;

const MainTitle = styled.h1`
  font-family: var(--font-secondary);
  font-weight: 600;
  font-size: 5vw;
  color: var(--color-background);
  margin-top: -15px;

  @media (max-width: 1220px) {
    font-size: 52px;
  }

  @media (max-width: 480px) {
    margin-top: 0;
    font-size: 34px;
  }

  @media (max-width: 375px) {
    font-size: 24px;
  }
`;

const MainText = styled.p`
  font-family: var(--font-primary);
  font-weight: 400;
  font-size: 20px;
  font-size: 1.5vw;
  color: var(--color-text);
  line-height: 1.6;

  @media (max-width: 1220px) {
    font-size: 18px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
  }

  @media (max-width: 375px) {
    font-size: 12px;
  }
`;

const HeadImgContainer = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: center;
  margin-top: 60px;

  & > .gatsby-image-wrapper {
    width: 100%;
  }

  @media (max-width: 480px) {
    margin-top: 100px;
  }
`;

const Main = () => {
  const [isPortrait, setIsPortrait] = useState(
    window.matchMedia("(orientation: portrait)").matches
  );

  const headImgLs = useStaticQuery(graphql`
    query {
      allFile {
        edges {
          node {
            name
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid_withWebp_tracedSVG
              }
            }
          }
        }
      }
    }
  `).allFile.edges;

  const resizeMainVisual = () => {
    const brainwave = document.querySelector(".brainwave");
    const mainTextBlockHeight = document.querySelector(".main-text-block")
      .offsetHeight;
    const imageContainer = document.querySelector(".head-image-container");

    brainwave.style.height = `${(mainTextBlockHeight / 5) * 10}px`;

    let imageContainerHeight;
    let imageContainerWidth;
    if (window.innerWidth > 480) {
      // imageContainerHeight = Math.min(
      //   Math.max(window.innerHeight - mainTextBlockHeight - 60, 300),
      //   window.innerHeight * (3 / 5)
      // );

      imageContainerHeight = Math.max(
        window.innerHeight - mainTextBlockHeight - 60,
        300
      );

      // imageContainerHeight = window.innerHeight - mainTextBlockHeight - 60;
    } else {
      // imageContainerHeight = Math.min(
      //   Math.max(window.innerHeight - mainTextBlockHeight - 100, 300),
      //   window.innerHeight * (3 / 5)
      // );

      imageContainerHeight = Math.max(
        window.innerHeight - mainTextBlockHeight - 100,
        150
      );

      // imageContainerHeight = window.innerHeight - mainTextBlockHeight - 100;
    }

    if (window.matchMedia("(orientation: portrait)").matches) {
      imageContainerWidth = imageContainerHeight * 0.83415;
    } else {
      imageContainerWidth = imageContainerHeight * 1.19882;
    }

    imageContainer.style.height = `${imageContainerHeight}px`;
    imageContainer.style.width = `${imageContainerWidth}px`;
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
    <StyledMain as="section">
      <StyledBrainwave className="brainwave" />
      <MainTextBlock className="main-text-block">
        <MainText>Hello, I am</MainText>
        <MainTitle>Vance Tan.</MainTitle>
        <MainText style={{ marginTop: "15px" }}>
          As a creative software engineer, I dream big and bold, then try (my
          best) to build them. Check out my{" "}
          <Link className="link" to="/">
            work
          </Link>
          , read some of my{" "}
          <Link className="link" to="/">
            musings
          </Link>{" "}
          and of course, feel free to{" "}
          <Link className="link" to="/">
            speak
          </Link>{" "}
          with me.
        </MainText>
      </MainTextBlock>
      <HeadImgContainer className="head-image-container">
        {isPortrait ? (
          <Img
            fluid={headImgLs[1].node.childImageSharp.fluid}
            alt="Head photo of Vance Tan"
          />
        ) : (
          <Img
            fluid={headImgLs[0].node.childImageSharp.fluid}
            alt="Head photo of Vance Tan"
          />
        )}
      </HeadImgContainer>
    </StyledMain>
  );
};

export default Main;
