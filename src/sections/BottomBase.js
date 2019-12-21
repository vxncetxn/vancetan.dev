import React from "react";
import styled from "styled-components";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";

const BottomImgContainer = styled.div`
  width: 25vw;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  position: relative;
  //   border: 1px solid blue;

  & > .gatsby-image-wrapper {
    width: 100%;
  }

  @media (max-width: 1220px) {
    width: 35vw;
  }

  @media (max-width: 833px) {
    width: 45vw;
  }

  @media (max-width: 550px) {
    width: 60vw;
  }

  @media (max-width: 375px) {
    width: 80vw;
  }
`;

const BottomTitle = styled.h1`
  position: relative;
  z-index: 1;
  font-family: var(--font-secondary);
  font-weight: 600;
  font-size: ${props => (props.isPortrait ? "60px" : "100px")};
  color: var(--color-text);
  text-transform: uppercase;
  //   border: 1px solid green;
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
          <Img
            fluid={bottomImgLs[2].node.childImageSharp.fluid}
            alt="Bottom photo of Vance Tan"
            loading="eager"
          />
        ) : (
          <Img
            fluid={bottomImgLs[0].node.childImageSharp.fluid}
            alt="Bottom photo of Vance Tan"
            loading="eager"
          />
        )}
      </BottomImgContainer>
      <BottomTitle isPortrait={isPortrait}>{title}</BottomTitle>
    </>
  );
};

export default WorkMain;
