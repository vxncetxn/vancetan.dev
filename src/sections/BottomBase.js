import React, { useContext } from "react";
import styled from "styled-components";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";

import SectionContext from "../SectionContext";

const StyledBottomBase = styled.div`
  display: none;
`;

const BottomImgContainer = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: center;
  position: relative;
  //   border: 1px solid blue;

  & > .gatsby-image-wrapper {
    width: 100%;
  }
`;

const BottomTitle = styled.h1`
  position: relative;
  z-index: 1;
  font-family: var(--font-secondary);
  font-weight: 600;
  font-size: ${props => (props.isPortrait ? "70px" : "100px")};
  color: white;
  text-transform: uppercase;
  //   border: 1px solid green;
  text-align: center;
  margin-top: ${props => (props.isPortrait ? "-145px" : "-170px")};
`;

const WorkMain = ({ isPortrait }) => {
  const sectionContext = useContext(SectionContext);

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
    <StyledBottomBase id="bottom-base">
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
      <BottomTitle isPortrait={isPortrait}>
        {sectionContext.section}
      </BottomTitle>
    </StyledBottomBase>
  );
};

export default WorkMain;
