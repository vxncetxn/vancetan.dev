import React, { useEffect } from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import ResizeObserver from "resize-observer-polyfill";

import Brainwave from "../assets/graphics/brainwave-vA.svg";

const StyledMain = styled.section`
  position: relative;
  //   border: 1px solid red;
  //   height: 100vh;
  //   min-height: 500px;
`;

const StyledBrainwave = styled(Brainwave)`
  position: absolute;
  left: 0;
  top: 0;
  width: 100vw;
  height: 70vh;
  //   min-height: 500px;
  z-index: -1;

  @media (max-width: 860px) {
    height: 500px;
  }
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
  //   font-size: 60px;
  font-size: 5vw;
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
  font-size: 1.4vw;
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
  useEffect(() => {
    const ro = new ResizeObserver(entries => {
      for (let entry of entries) {
        let totalHeight = 0;
        document.querySelectorAll(".measure").forEach(item => {
          totalHeight += parseInt(item.offsetHeight);
        });

        const brainwave = document.querySelector(".brainwave");
        if (entry.contentRect.width > 530) {
          brainwave.style.height = `${(totalHeight / 3.9) * 9}px`;
        } else {
          brainwave.style.height = `${(totalHeight / 4.5) * 9}px`;
        }
      }
    });

    ro.observe(document.querySelector("body"));
  }, []);

  return (
    <StyledMain>
      <StyledBrainwave className="brainwave" />
      <MainTextBlock>
        <MainText className="measure">Hello, I am</MainText>
        <MainTitle className="measure">Vance Tan.</MainTitle>
        <MainText className="measure" style={{ marginTop: "10px" }}>
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
