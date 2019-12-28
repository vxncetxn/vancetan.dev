import React, { memo } from "react";
import { Helmet } from "react-helmet";

const Favicon = memo(({ theme }) => {
  return (
    <Helmet>
      <link
        rel="shortcut icon"
        type="image/x-icon"
        href={`/favicon-${theme}/favicon.ico`}
      />
      <link
        rel="icon"
        type="image/x-icon"
        href={`/favicon-${theme}/favicon.ico`}
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href={`/favicon-${theme}/apple-touch-icon.png`}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href={`/favicon-${theme}/favicon-32x32.png`}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href={`/favicon-${theme}/favicon-16x16.png`}
      />
      <link rel="manifest" href={`/favicon-${theme}/site.webmanifest`} />
    </Helmet>
  );
});

export default Favicon;
