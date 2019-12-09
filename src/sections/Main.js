import React from "react";
import styled from "styled-components";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import Div100vh from "react-div-100vh";

import Brainwave from "../assets/graphics/brainwave-vA.svg";
import TransitButton from "../TransitButton";

const StyledMain = styled(Div100vh)`
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
  color: var(--color-background);
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
  color: var(--color-text);
  line-height: 1.6;

  @media (max-width: 1220px) {
    font-size: 18px;
  }

  @media (max-width: 550px) {
    font-size: 14px;
  }

  @media (max-width: 375px) {
    font-size: 12px;
  }
`;

const HeadImgContainer = styled.div`
  width: 25vw;
  display: flex;
  justify-content: center;
  // border: 1px solid green;

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

const Main = ({ isPortrait }) => {
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

  return (
    <StyledMain id="main">
      <StyledBrainwave className="brainwave" />
      <MainTextBlock className="main-text-block">
        <MainText>Hello, I am</MainText>
        <MainTitle>Vance Tan.</MainTitle>
        <MainText style={{ marginTop: "15px" }}>
          As a creative software engineer, I dream big and bold, then try (my
          best) to build them. Check out my{" "}
          <TransitButton to="projects">work</TransitButton>, read some of my{" "}
          <TransitButton to="writings">musings</TransitButton> and of course,
          feel free to <TransitButton to="contact">speak</TransitButton> with
          me.
        </MainText>
      </MainTextBlock>
      <HeadImgContainer className="head-image-container">
        {isPortrait ? (
          <Img
            fluid={headImgLs[3].node.childImageSharp.fluid}
            alt="Head photo of Vance Tan"
          />
        ) : (
          <Img
            fluid={headImgLs[1].node.childImageSharp.fluid}
            alt="Head photo of Vance Tan"
          />
        )}
      </HeadImgContainer>
    </StyledMain>
  );
};

export default Main;
