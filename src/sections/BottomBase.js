import React from "react";
import styled from "styled-components";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";

import BottomOverlayWide from "../assets/graphics/overlays/head-bottom-silhouette.svg";
import BottomOverlayNarrow from "../assets/graphics/overlays/head-bottom-narrow-silhouette.svg";

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
    width: 260px;
  }

  @media (max-width: 375px) {
    // width: 65vw;
    width: 240px;
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

const WorkMain = ({ title, isPortrait }) => {
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
              fluid={bottomImgLs[2].node.childImageSharp.fluid}
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
      </BottomImgContainer>
      <BottomTitle isPortrait={isPortrait}>{title}</BottomTitle>
    </>
  );
};

export default WorkMain;
