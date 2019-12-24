import { createGlobalStyle } from "styled-components";

const Defaults = createGlobalStyle`
    :root {
      --font-primary: "Roboto Mono";
      --font-secondary: "Oswald";
    
      --color-layer-top: #621055;
      --color-layer-middle: #b52b65;
      --color-layer-bottom: #d85a5a;
      --color-background: #d47e54;
      --color-text: #ffffff;
      --color-main-title: #d47e54;
      --color-layer-text: #ffffff;
      --color-highlighted-text: #ffffff;

      // --color-layer-top: #1f3a93;
      // --color-layer-middle: #56B4E9;
      // --color-layer-bottom: #d590b6;
      // --color-background: #f8edf3;
      // --color-text: #1f3a93;
      // --color-main-title: #f8edf3;
      // --color-layer-text: #ffffff;
    }

    [theme="dover-overcast"] {
      --font-primary: "Roboto Mono";
      --font-secondary: "Oswald";

      --color-layer-top: #233567;
      --color-layer-middle: #315b96;
      --color-layer-bottom: #fbc1bc;
      --color-background: #ffdfdf;
      --color-text: #315b96;
      --color-main-title: #ffdfdf;
      --color-layer-text: #ffffff;
      --color-highlighted-text: #ffffff;
    }

    [theme="theme-three"] {
      --font-primary: "Roboto Mono";
      --font-secondary: "Oswald";
      
      --color-layer-top: #C54F61;
      --color-layer-middle: #88304e;
      --color-layer-bottom: #522546;
      --color-background: #311d3f;
      --color-text: #ffffff;
      --color-main-title: #311d3f;
      --color-layer-text: #ffffff;
      --color-highlighted-text: #ffffff;
    }

    [theme="muir-summer"] {
      --font-primary: "Roboto Mono";
      --font-secondary: "Oswald";
      
      --color-layer-top: #6aaf78;
      --color-layer-middle: #d2df9f;
      --color-layer-bottom: #A55B53;
      --color-background: #5B270B;
      --color-text: #ffffff;
      --color-main-title: #5B270B;
      --color-layer-text: #ffffff;
      --color-highlighted-text: #ffffff;
    }

    [theme="tomita-summer"] {
      --font-primary: "Roboto Mono";
      --font-secondary: "Oswald";
      
      // --color-layer-top: #F8EDF3;
      // --color-layer-middle: #D590B6;
      // --color-layer-bottom: #56B4E9;
      // --color-background: #004166;
      // --color-text: #F8EDF3;
      // --color-main-title: #004166;
      // --color-layer-text: #004166;

      --color-layer-top: #fff3b1;
      --color-layer-middle: #fdcb6e;
      --color-layer-bottom: #7b7bb7;
      --color-background: #634884;
      --color-text: #ffffff;
      --color-main-title: #634884;
      --color-layer-text: #634884;
      --color-highlighted-text: #4a3663;
    }

    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    html {
      font-size: 62.5%;
    }

    body {
      position: relative;
      background-color: var(--color-background);
      transition: background-color 0.6s ease-out;

      @media (max-width: 768px) {
        // background-color: blue;
      }
    }

    ul {
      list-style: none;
    }

    button {
      font-family: inherit;
      font-size: inherit;
      font-weight: inherit;
      text-transform: inherit;
      letter-spacing: inherit;
      color: inherit;
      background-color: transparent;
      border: none;
      cursor: pointer;
    }

    a {
      color: inherit;
      text-decoration: none;
    }

    .sr-only:not(:focus):not(:active) {
      clip: rect(0 0 0 0);
      clip-path: inset(100%);
      height: 1px;
      overflow: hidden;
      position: absolute;
      white-space: nowrap;
      width: 1px;
    }

    .link {
      position: relative;
    //   border: 1px solid red;
    }

    .link-underline-svg {
      position: absolute;
      left: -2px;
    }

    .link-underline-path {
      fill: transparent;
      stroke: var(--color-layer-top);
      stroke-width: 7;
      stroke-linecap: round;

      @media (max-width: 1220px) {
        stroke-width: 6;
      }
    
      @media (max-width: 550px) {
        stroke-width: 5;
      }
    
      @media (max-width: 375px) {
        stroke-width: 4;
      }
    }

    .link-circle-svg {
      position: absolute;
      bottom: -10px;
      left: -10px;
    }

    .link-circle-path {
      display: none;
      fill: transparent;
      stroke: var(--color-layer-top);
      stroke-width: 17;
      stroke-linecap: round;
      stroke-miterlimit: 10;

      @media (max-width: 1220px) {
        stroke-width: 15;
      }
    
      @media (max-width: 550px) {
        stroke-width: 13;
      }
    
      @media (max-width: 375px) {
        stroke-width: 11;
      }
    }

    .link:hover .link-circle-path {
      display: block;
      animation: circle-link 0.4s ease-out forwards;
    }

    .link.circled .link-circle-path {
      display: block;
      stroke-dasharray: none;
      stroke-dashoffset: 0;
    }

    @keyframes circle-link {
      to {
        stroke-dashoffset: 0;
      }
    }

    @keyframes move-up {
      0% {
        opacity: 0;
      }

      100% {
        opacity: 1;
      }
    }
`;

export default Defaults;
