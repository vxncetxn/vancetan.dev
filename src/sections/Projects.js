import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

const StyledProjects = styled.section`
  // display: none;
`;

const ProjectsList = styled.ul`
  text-align: center;
  padding: 0 15%;
  margin: 100px auto;

  & * + * {
    margin-top: 50px;

    @media (max-width: 550px) {
      margin-top: 30px;
    }
  }

  @media (max-width: 550px) {
    padding: 0 20px;
  }
`;

const ProjectTitle = styled.h2`
  font-family: var(--font-secondary);
  font-weight: 600;
  font-size: 4vw;
  color: var(--color-text);
  text-transform: uppercase;
  position: relative;
  word-wrap: break-word;

  & ::before {
    content: "${props => props.before}";
    color: var(--color-layer-top);
    font-family: var(--font-primary);
    font-weight: 500;
    font-size: 1.25vw;
    text-transform: none;
    position: absolute;
    top: -12px;

    @media (max-width: 1220px) {
      font-size: 18px;
    }
  
    @media (max-width: 550px) {
      font-size: 14px;
    }
  
    @media (max-width: 375px) {
      font-size: 12px;
    }
  }

  @media (max-width: 1220px) {
    font-size: 44px;
  }

  @media (max-width: 550px) {
    font-size: 32px;
  }

  @media (max-width: 375px) {
    font-size: 24px;
  }
`;

const StyledLink = styled(Link)`
  opacity: 0.7;
  cursor: pointer;

  &:hover {
    opacity: 1;
  }
`;

const WorkMain = () => {
  return (
    <StyledProjects id="projects">
      <ProjectsList>
        <li>
          <ProjectTitle before="01 / Personal">
            <StyledLink to="/">Photojournals.dev</StyledLink>
          </ProjectTitle>
        </li>
        <li>
          <ProjectTitle before="02 / Work">
            <StyledLink to="/">SUTD Ring</StyledLink>
          </ProjectTitle>
        </li>
        <li>
          <ProjectTitle before="03 / Work">
            <StyledLink to="/">What The Hack 2020</StyledLink>
          </ProjectTitle>
        </li>
        <li>
          <ProjectTitle before="04 / School">
            <StyledLink to="/">ACNAPI Project</StyledLink>
          </ProjectTitle>
        </li>
        <li>
          <ProjectTitle before="05 / School">
            <StyledLink to="/">
              Visualisation of Shakespeare's Tragedies
            </StyledLink>
          </ProjectTitle>
        </li>
      </ProjectsList>
    </StyledProjects>
  );
};

export default WorkMain;
