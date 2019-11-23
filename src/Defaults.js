import { createGlobalStyle } from "styled-components";

const Defaults = createGlobalStyle`
    :root {
      
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
    }

    ul {
      list-style: none;
    }
`;

export default Defaults;
