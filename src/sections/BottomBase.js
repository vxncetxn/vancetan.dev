import React from "react";
import styled from "styled-components";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";

import BottomOverlayWide from "../assets/graphics/overlays/head-bottom-silhouette.svg";
import BottomOverlayNarrow from "../assets/graphics/overlays/head-bottom-narrow-silhouette.svg";
import Mouth from "../assets/graphics/mouth.svg";

const BottomImgContainer = styled.div`
  width: 25vw;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  position: relative;

  & > .gatsby-image-wrapper {
    width: 100%;
  }

  & > .overlay {
    width: 100%;
    position: absolute;
    left: 0px;
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

const BottomTitle = styled.h1`
  position: relative;
  z-index: 1;
  font-family: var(--font-secondary);
  font-weight: 600;
  font-size: ${props => (props.isPortrait ? "60px" : "100px")};
  color: var(--color-layer-top);
  text-transform: uppercase;
  text-align: center;
  margin-top: ${props => (props.isPortrait ? "-140px" : "-160px")};
  transition: color 0.6s ease-out;
`;

const StyledMouth = styled(Mouth)`
  width: 13vw;
  height: 6.5vw;
  position: absolute;
  left: 25%;
  bottom: 12%;

  @media (max-width: 1220px) {
    width: 190px;
    height: 100px;
    left: 25.5%;
    bottom: 12%;
  }

  @media (orientation: portrait) and (max-width: 833px) {
    width: 170px;
    height: 90px;
    left: 22%;
    bottom: 18%;
  }

  @media (max-width: 550px) {
    width: 130px;
    height: 75px;
  }

  @media (max-width: 375px) {
    width: 110px;
    height: 60px;
    left: 23%;
    bottom: 20%;
  }
`;

const WorkMain = ({ title, isPortrait, is404 }) => {
  const bottomImgLs = useStaticQuery(graphql`
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

  return (
    <>
      <BottomImgContainer className="bottom-image-container">
        {isPortrait ? (
          <>
            <Img
              fluid={bottomImgLs[1].node.childImageSharp.fluid}
              alt="Bottom photo of Vance Tan"
              loading="eager"
            />
            <BottomOverlayNarrow className="overlay" />
          </>
        ) : (
          <>
            <Img
              fluid={bottomImgLs[0].node.childImageSharp.fluid}
              alt="Bottom photo of Vance Tan"
              loading="eager"
            />
            <BottomOverlayWide className="overlay" />
          </>
        )}
        {is404 ? <StyledMouth /> : null}
      </BottomImgContainer>
      <BottomTitle isPortrait={isPortrait}>{title}</BottomTitle>
    </>
  );
};

export default WorkMain;
