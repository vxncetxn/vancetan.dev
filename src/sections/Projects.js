import React from "react";
import styled from "styled-components";

import TransitObject from "../TransitObject";
import formatIndexNum from "../Helpers/formatIndexNum";

const ProjectsList = styled.ul`
  text-align: center;
  padding: 100px 15%;

  & * + * {
    margin-top: 50px;

    @media (max-width: 550px) {
      margin-top: 30px;
    }
  }

  @media (max-width: 550px) {
    text-align: left;
    padding: 100px 50px 50px 20px;
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
  transition: color 0.6s ease-out;

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

const StyledTransitObject = styled(TransitObject)`
  opacity: 0.7;
  cursor: pointer;

  &:hover {
    opacity: 1;
  }
`;

const WorkMain = ({ projectsIndex }) => {
  return (
    <>
      <ProjectsList>
        {projectsIndex.map((proj, idx) => {
          return (
            <li key={proj.path}>
              <ProjectTitle
                before={`${formatIndexNum(idx + 1)} / ${proj.tags}`}
              >
                <StyledTransitObject
                  style={{ border: "1px solid red" }}
                  to={`projects/${proj.path}`}
                >
                  {proj.title}
                </StyledTransitObject>
              </ProjectTitle>
            </li>
          );
        })}
      </ProjectsList>
    </>
  );
};

export default WorkMain;
