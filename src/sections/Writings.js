import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

const WritingsList = styled.ul`
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

const WritingTitle = styled.h2`
  font-family: var(--font-secondary);
  font-weight: 600;
  font-size: 4vw;
  color: var(--color-text);
  text-transform: uppercase;
  position: relative;
  transition: color 0.6s ease-out;

  & ::before {
    content: "${props => props.before}";
    color: var(--color-layer-top);
    font-family: var(--font-primary);
    font-weight: 500;
    font-size: 18px;
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
    <>
      <WritingsList>
        <li>
          <WritingTitle before="01 / Personal">
            <StyledLink to="/">How to supercharge performance</StyledLink>
          </WritingTitle>
        </li>
        <li>
          <WritingTitle before="02 / Work">
            <StyledLink to="/">SUTD Ring</StyledLink>
          </WritingTitle>
        </li>
        <li>
          <WritingTitle before="03 / Work">
            <StyledLink to="/">What The Hack 2020</StyledLink>
          </WritingTitle>
        </li>
        <li>
          <WritingTitle before="04 / School">
            <StyledLink to="/">ACNAPI Project</StyledLink>
          </WritingTitle>
        </li>
        <li>
          <WritingTitle before="05 / School">
            <StyledLink to="/">
              Visualisation of Shakespeare's Tragedies
            </StyledLink>
          </WritingTitle>
        </li>
      </WritingsList>
    </>
  );
};

export default WorkMain;
