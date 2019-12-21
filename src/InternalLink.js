import React from "react";

import TransitObject from "./TransitObject";

const InternalLink = ({ children, to, circled, disabled }) => {
  return (
    // <TransitObject to={to} className={`link ${circled ? "circled" : null}`}>
    //   {children}
    // </TransitObject>
    <TransitObject to={to} disabled={disabled}>
      {children}
    </TransitObject>
  );
};

export default InternalLink;
