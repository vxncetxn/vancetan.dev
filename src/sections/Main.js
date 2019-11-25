import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

import Brainwave from "../assets/graphics/brainwave-vA.svg";

const StyledMain = styled.section`
  position: relative;
`;

const StyledBrainwave = styled(Brainwave)`
  position: absolute;
  left: 0;
  top: 0;
  width: 100vw;
  height: 70vh;
  min-height: 500px;
  z-index: -1;
`;

const MainTextBlock = styled.main`
  width: 45vw;
  margin: 0 auto;
  padding-top: 80px;
  //   border: 1px solid red;

  @media (max-width: 1220px) {
    padding-top: 75px;
  }

  @media (max-width: 860px) {
    padding-top: 65px;
  }

  @media (max-width: 530px) {
    padding-top: 15px;
  }
`;

const MainTitle = styled.h1`
  font-family: var(--font-secondary);
  font-weight: 600;
  font-size: 60px;
  color: var(--color-background);
  margin-top: -15px;

  @media (max-width: 1220px) {
    font-size: 52px;
  }

  @media (max-width: 860px) {
    font-size: 44px;
    margin-top: -5px;
  }

  @media (max-width: 530px) {
    margin-top: 0;
    font-size: 34px;
  }
`;

const MainText = styled.p`
  font-family: var(--font-primary);
  font-weight: 400;
  font-size: 20px;
  color: var(--color-text);
  line-height: 1.6;

  @media (max-width: 1220px) {
    font-size: 18px;
  }

  @media (max-width: 860px) {
    font-size: 16px;
  }

  @media (max-width: 530px) {
    font-size: 14px;
  }
`;

const Main = () => {
  return (
    <StyledMain>
      <StyledBrainwave />
      <MainTextBlock>
        <MainText>Hello, I am</MainText>
        <MainTitle>Vance Tan.</MainTitle>
        <MainText style={{ marginTop: "10px" }}>
          As a creative software engineer, I dream big and bold, then try (my
          best) to build them. Check out my <Link className="link">work</Link>,
          read some of my <Link className="link">musings</Link> and of course,
          feel free to <Link className="link">speak</Link> with me.
        </MainText>
      </MainTextBlock>
    </StyledMain>
  );
};

export default Main;
