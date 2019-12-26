import { createGlobalStyle } from "styled-components";

const Defaults = createGlobalStyle`
    :root {
      --font-primary: "Roboto Mono";
      --font-secondary: "Oswald";
    
      // --color-layer-top: #233567;
      // --color-layer-middle: #315b96;
      // --color-layer-bottom: #fbc1bc;
      // --color-background: #ffdfdf;
      // --color-text: #233567;
      // --color-main-title: #ffdfdf;
      // --color-layer-text: #ffffff;
      // --color-highlighted-text: #ffffff;
      // --color-overlay: #006aff;

      // Deep Blue-Glossy Red
      --color-layer-top: #ac3945;
      --color-layer-middle: #792D49;
      --color-layer-bottom: #47214E;
      --color-background: #141552;
      --color-text: #ffffff;
      --color-accent: #ac3945;
      --color-main-title: #ffffff;
      --color-layer-text: #ffffff;
      --color-highlighted-text: #ffffff;
      --color-overlay: #006aff;

      //Bright Purple-Orange
      // --color-layer-top: #fb6754;
      // --color-layer-middle: #D1596D;
      // --color-layer-bottom: #A74A85;
      // --color-background: #7d3c9e;
      // --color-text: #ffffff;
      // --color-main-title: #ffffff;
      // --color-layer-text: #ffffff;
      // --color-highlighted-text: #ffffff;
      // --color-overlay: #9346b9;

      // Blue-Pink
      // --color-layer-top: #bf4082;
      // --color-layer-middle: #822E72;
      // --color-layer-bottom: #451C62;
      // --color-background: #080a52;
      // --color-text: #ffffff;
      // --color-accent: #bf4082;
      // --color-main-title: #ffffff;
      // --color-layer-text: #ffffff;
      // --color-highlighted-text: #ffffff;
      // --color-overlay: #1218ba;

      // Deep Blue-Teal
      // --color-layer-top: #39c6a3;
      // --color-layer-middle: #318492;
      // --color-layer-bottom: #294281;
      // --color-background: #210070;
      // --color-text: #ffffff;
      // --color-accent: #39c6a3;
      // --color-main-title: #ffffff;
      // --color-layer-text: #ffffff;
      // --color-highlighted-text: #ffffff;
      // --color-overlay: #4c00ff;

      // Maroon-Peach
      // --color-layer-top: #ffa781;
      // --color-layer-middle: #C87465;
      // --color-layer-bottom: #924149;
      // --color-background: #5b0e2d;
      // --color-text: #ffffff;
      // --color-accent: #ffa781;
      // --color-main-title: #ffffff;
      // --color-layer-text: #ffffff;
      // --color-highlighted-text: #ffffff;
      // --color-overlay: #b01c57;
    }

    [theme="theme-two"] {
      // Beige/Playful Blue

      --font-primary: "Roboto Mono";
      --font-secondary: "Oswald";

      --color-layer-top: #4645d1;
      --color-layer-middle: #846DC4;
      --color-layer-bottom: #C194B7;
      --color-background: #ffbcaa;
      --color-text: #4645d1;
      --color-accent: #29a3a3;
      --color-main-title: #ffffff;
      --color-layer-text: #ffffff;
      --color-highlighted-text: #ffffff;
      --color-overlay: #ff8766;
    }

    [theme="theme-three"] {
      // Dark Purple-Deep Pink

      --font-primary: "Roboto Mono";
      --font-secondary: "Oswald";

      --color-layer-top: #bf4082;
      --color-layer-middle: #8D2F6C;
      --color-layer-bottom: #5A1F55;
      --color-background: #280e3f;
      --color-text: #ffffff;
      --color-accent: #bf4082;
      --color-main-title: #ffffff;
      --color-layer-text: #ffffff;
      --color-highlighted-text: #ffffff;
      --color-overlay: #4a2fd0;
    }

    [theme="theme-four"] {
      // Black-Hacker Green

      --font-primary: "Roboto Mono";
      --font-secondary: "Oswald";

      --color-layer-top: #20C20E;
      --color-layer-middle: #158109;
      --color-layer-bottom: #0B4105;
      --color-background: #000000;
      --color-text: #20C20E;
      --color-accent: #ffffff;
      --color-main-title: #000000;
      --color-layer-text: #000000;
      --color-highlighted-text: #333333;
      --color-overlay: #333333;
    }

    [theme="theme-five"] {
      // Bright Purple-Deep Yellow

      --font-primary: "Roboto Mono";
      --font-secondary: "Oswald";

      --color-layer-top: #ffba37;
      --color-layer-middle: #C67C67;
      --color-layer-bottom: #8C3E96;
      --color-background: #5300c6;
      --color-text: #ffffff;
      --color-accent: #ffba37;
      --color-main-title: #5300c6;
      --color-layer-text: #5300c6;
      --color-highlighted-text: #6a00ff;
      --color-overlay: #8833ff;
    }

    // [theme="mojave-sunset"] {
    //   --font-primary: "Roboto Mono";
    //   --font-secondary: "Oswald";

    //   --color-layer-top: #621055;
    //   --color-layer-middle: #b52b65;
    //   --color-layer-bottom: #d85a5a;
    //   --color-background: #d47e54;
    //   --color-text: #ffffff;
    //   --color-main-title: #d47e54;
    //   --color-layer-text: #ffffff;
    //   --color-highlighted-text: #ffffff;
    //   --color-overlay: #4e00ff;
    // }

    // [theme="theme-three"] {
    //   --font-primary: "Roboto Mono";
    //   --font-secondary: "Oswald";
      
    //   --color-layer-top: #C54F61;
    //   --color-layer-middle: #88304e;
    //   --color-layer-bottom: #522546;
    //   --color-background: #311d3f;
    //   --color-text: #ffffff;
    //   --color-main-title: #311d3f;
    //   --color-layer-text: #ffffff;
    //   --color-highlighted-text: #ffffff;
    //   --color-overlay: #AC475B;
    // }

    // [theme="muir-sunny"] {
    //   --font-primary: "Roboto Mono";
    //   --font-secondary: "Oswald";
      
    //   --color-layer-top: #6aaf78;
    //   --color-layer-middle: #d2df9f;
    //   --color-layer-bottom: #A55B53;
    //   --color-background: #5B270B;
    //   --color-text: #ffffff;
    //   --color-main-title: #5B270B;
    //   --color-layer-text: #ffffff;
    //   --color-highlighted-text: #ffffff;
    //   --color-overlay: #6aaf78;
    // }

    // [theme="tomita-summer"] {
    //   --font-primary: "Roboto Mono";
    //   --font-secondary: "Oswald";

    //   --color-layer-top: #fff3b1;
    //   --color-layer-middle: #fdcb6e;
    //   --color-layer-bottom: #7b7bb7;
    //   --color-background: #634884;
    //   --color-text: #ffffff;
    //   --color-main-title: #634884;
    //   --color-layer-text: #634884;
    //   --color-highlighted-text: #4a3663;
    //   --color-overlay: #E5D7AA;
    // }

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

      overflow: hidden;
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
