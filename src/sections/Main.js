import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

const StyledMain = styled.section`
  position: relative;
`;

const Brainwave = styled.svg`
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
  padding-top: 70px;
  //   border: 1px solid red;

  @media (max-width: 1200px) {
    padding-top: 60px;
  }

  @media (max-width: 860px) {
    padding-top: 50px;
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

  @media (max-width: 1200px) {
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

  @media (max-width: 1200px) {
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
      <Brainwave
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        viewBox="0 0 1920 900"
      >
        <path
          d="M1004.1,408c2-44.9,10.78-110.85,46.06-178.64C1107.88,118.5,1187.28,98.93,1305,7.82c200.48-155.24,171.88-254,358.18-382.4,98.63-68,194.18-100.64,256.86-117.38H0v94.57c229.3,65.21,322.41,163.17,364.59,242.45C392.31-102.83,403.49-48.52,464.82,9c47.43,44.46,72.06,41.33,198.62,110.37,96.25,52.5,145.66,79.29,182.54,126.2C892.62,304.87,908.85,368.24,915.3,408Z"
          transform="translate(0 491.96)"
          fill="#611c56"
        />
        <path
          d="M1920-492c-62.68,16.74-158.23,49.39-256.86,117.38C1476.84-246.17,1505.44-147.42,1305,7.82c-117.68,91.11-197.08,110.68-254.8,221.58-35.28,67.79-44.09,133.74-46.06,178.64h49.32c85.48-144.8,180.06-219.75,247.21-260.87C1451,55.11,1565,70.74,1732.09-39c91.48-60.1,152.77-127.51,187.91-171Z"
          transform="translate(0 491.96)"
          fill="#b52b65"
        />
        <path
          d="M0-397.39c229.3,65.21,322.41,163.17,364.59,242.45C392.31-102.83,403.49-48.52,464.82,9c47.43,44.46,72.06,41.33,198.62,110.37,96.25,52.5,145.66,79.29,182.54,126.2C892.62,304.87,908.85,368.24,915.3,408H863.72c-102-113.68-193.65-175.81-250.83-208.91-57.65-33.37-86.47-50.06-121.34-62.51,0,0-117.81-42.08-159.81-66.69l-.36-.21c-22.69-13.3-35.33-20.07-36.23-20.59l-.23-.12-.82-.45C232.84,14.89,178.56-51.08,178.56-51.08,153.68-81.36,104.93-118,0-144.91Z"
          transform="translate(0 491.96)"
          fill="#b52b65"
        />
        <path
          d="M1920-214.45c-37.93,46.67-99.06,112.38-187.91,171-167.81,110.63-282,95.32-431.46,186.17-72,43.79-166.25,120.78-249.87,265.35h56a740,740,0,0,0,188-71.73c144.91-79.63,142-143.13,248.16-175.39,108-32.81,160.83,17.76,272.92-32.65,48.85-22,83.33-51.6,104.2-72.29Z"
          transform="translate(0 491.96)"
          fill="#eb6663"
        />
        <path
          d="M863.72,408c-102-113.68-193.65-175.81-250.83-208.91-57.65-33.37-86.47-50.06-121.34-62.51,0,0-117.81-42.08-159.81-66.69l-.36-.21c-22.69-13.3-35.33-20.07-36.23-20.59l-.23-.12-.82-.45C232.84,14.89,178.56-51.08,178.56-51.08,153.68-81.36,104.93-118,0-144.91V94.55C56.8,136,107.51,153.21,144.64,161.13c83.76,17.88,124.81-6,196,19.42,59.12,21.14,88.92,58.43,118.29,86.51,58.69,56.12,160.94,118.79,351.51,141Z"
          transform="translate(0 491.96)"
          fill="#eb6663"
        />
      </Brainwave>
      <MainTextBlock>
        <MainText>Hello, I am</MainText>
        <MainTitle>Vance Tan.</MainTitle>
        <MainText style={{ marginTop: "10px" }}>
          As a creative software engineer, I dream big and bold, then try (my
          best) to build them. Check out my <Link className="link">work</Link>,
          read some of my <Link className="link">musings</Link> and of course,
          feel free to <Link className="link">reach out</Link> to me.
        </MainText>
      </MainTextBlock>
    </StyledMain>
  );
};

export default Main;
