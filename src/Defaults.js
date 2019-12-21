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
      --color-layer-text: #ffffff;

      // --color-layer-top: #233567;
      // --color-layer-middle: #315b96;
      // --color-layer-bottom: #fbc1bc;
      // --color-background: #ffdfdf;
      // --color-text: #ffffff;

      // --color-layer-top: #c65364;
      // --color-layer-middle: #88304e;
      // --color-layer-bottom: #522546;
      // --color-background: #311d3f;
      // --color-text: #ffffff;

      // --color-layer-top: #e46778;
      // --color-layer-middle: #f2dac0;
      // --color-layer-bottom: #928a97;
      // --color-background: #283c63;
      // --color-text: #ffffff;

      // --color-layer-top: #cdac6a;
      // --color-layer-middle: #9B814F;
      // --color-layer-bottom: #4B4C51;
      // --color-background: #303a52;
      // --color-text: #ffffff;
    }

    [theme="dover-overcast"] {
      --font-primary: "Roboto Mono";
      --font-secondary: "Oswald";

      --color-layer-top: #233567;
      --color-layer-middle: #315b96;
      --color-layer-bottom: #fbc1bc;
      --color-background: #ffdfdf;
      --color-text: #315b96;
      --color-layer-text: #ffffff;
    }

    [theme="theme-three"] {
      --font-primary: "Roboto Mono";
      --font-secondary: "Oswald";
      
      --color-layer-top: #c65364;
      --color-layer-middle: #88304e;
      --color-layer-bottom: #522546;
      --color-background: #311d3f;
      --color-text: #ffffff;
      --color-layer-text: #ffffff;
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

    .link {
      position: relative;
    //   border: 1px solid red;
    }

    .link-underline-svg {
      position: absolute;
      top: 22px;
      // top: 10px;
      left: -2px;
      // z-index: -1;

      @media (max-width: 1220px) {
        top: 19px;
      }
    
      @media (max-width: 550px) {
        top: 16px;
      }
    
      @media (max-width: 375px) {
        top: 13px;
      }
    }

    .link-underline-path {
      fill: transparent;
      stroke: var(--color-layer-top);
      stroke-width: 7;
      // stroke-width: 15;
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
      top: -10px;
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
