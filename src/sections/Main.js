import React, { useEffect, memo } from "react";
import styled, { keyframes } from "styled-components";
import { graphql, useStaticQuery } from "gatsby";
import { window } from "browser-monads";
import Img from "gatsby-image";

import Brainwave from "../assets/graphics/brainwave-vA.svg";
import Star from "../assets/icons/misc/star.svg";
import TopOverlayWide from "../assets/graphics/overlays/head-top-silhouette.svg";
import TopOverlayNarrow from "../assets/graphics/overlays/head-top-narrow-silhouette.svg";

const StyledMain = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const StyledBrainwave = styled(Brainwave)`
  position: absolute;
  left: 0;
  top: 0;
  width: 100vw;
  height: 70vh;
  z-index: -1;

  & > path {
    transition: fill 0.6s ease-out;
  }
`;

const MainTextBlock = styled.main`
  width: 45vw;
  padding-top: 80px;

  @media (max-width: 833px) {
    padding-top: 40px;
  }

  @media (max-width: 550px) {
    padding-top: 20px;
  }
`;

const MainTitle = styled.h1`
  font-family: var(--font-secondary);
  font-weight: 600;
  font-size: 5vw;
  color: var(--color-main-title);
  margin-top: -15px;

  @media (max-width: 1220px) {
    font-size: 52px;
  }

  @media (max-width: 550px) {
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
  color: var(--color-layer-text);
  line-height: 1.6;

  @media (max-width: 1220px) {
    font-size: 18px;
  }

  @media (max-width: 833px) {
    font-size: 16px;
  }

  @media (max-width: 550px) {
    font-size: 14px;
  }

  @media (max-width: 375px) {
    font-size: 12px;
  }
`;

const HeadImgContainer = styled.div`
  position: relative;
  width: 25vw;
  display: flex;
  justify-content: center;
  // border: 1px solid green;

  & > .gatsby-image-wrapper {
    width: 100%;
  }

  & > .overlay {
    width: 100%;
    position: absolute;
    left: 0;
    top: 0;
    mix-blend-mode: overlay;
    fill: var(--color-overlay);
  }

  @media (max-width: 1220px) {
    // width: 35vw;
    width: 380px;
  }

  @media (orientation: portrait) and (max-width: 833px) {
    // width: 45vw;
    width: 300px;
  }

  @media (max-width: 550px) {
    // width: 60vw;
    width: 230px;
  }

  @media (max-width: 375px) {
    // width: 65vw;
    width: 200px;
  }
`;

const Pulsate = keyframes`
  100% {
    transform: scale(1.2);
  }
`;

const StarLeft = styled(Star)`
  width: 5vw;
  position: absolute;
  left: 20%;
  bottom: 6%;
  animation: ${Pulsate} 0.4s linear infinite;

  & > path {
    fill: var(--color-layer-middle);
  }

  @media (max-width: 1220px) {
    width: 70px;
  }

  @media (max-width: 550px) {
    left: 18%;
    bottom: 6%;
    width: 55px;
  }

  @media (max-width: 375px) {
    width: 45px;
  }
`;

const StarRight = styled(Star)`
  width: 5vw;
  position: absolute;
  left: 60%;
  bottom: 6%;
  animation: ${Pulsate} 0.4s linear infinite;

  & > path {
    fill: var(--color-layer-middle);
  }

  @media (max-width: 1220px) {
    width: 70px;
  }

  @media (max-width: 550px) {
    bottom: 6%;
    width: 55px;
  }

  @media (max-width: 375px) {
    width: 45px;
  }
`;

const Main = memo(({ isPortrait }) => {
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

  useEffect(() => {
    document.querySelector("#main").style.height = `${window.innerHeight}px`;
  }, [isPortrait]);

  return (
    <StyledMain id="main">
      <StyledBrainwave className="brainwave" />
      <MainTextBlock className="main-text-block">
        <MainText>Hello, I am</MainText>
        <MainTitle>Vance Tan.</MainTitle>
        <MainText style={{ marginTop: "15px" }}>
          I am a creative software engineer that works across the stack,
          hobbyist photographer and an absolute fan of good food. Have a look
          around here and feel free to reach out!
        </MainText>
      </MainTextBlock>
      <HeadImgContainer className="head-image-container">
        {isPortrait ? (
          <>
            <Img
              fluid={headImgLs[3].node.childImageSharp.fluid}
              alt="Head photo of Vance Tan"
            />
            <TopOverlayNarrow className="overlay" />
          </>
        ) : (
          <>
            <Img
              fluid={headImgLs[2].node.childImageSharp.fluid}
              alt="Head photo of Vance Tan"
            />
            <TopOverlayWide className="overlay" />
          </>
        )}
        <StarLeft />
        <StarRight />
      </HeadImgContainer>
    </StyledMain>
  );
});

export default Main;
