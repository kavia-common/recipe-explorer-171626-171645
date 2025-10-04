import React from "react";
import PropTypes from "prop-types";

/**
 * PUBLIC_INTERFACE
 * Button reusable component with variants.
 */
export default function Button({ children, variant = "primary", ...props }) {
  /** Renders a semantic button applying the desired style variant */
  return (
    <button className={`btn ${variant === "secondary" ? "secondary" : variant === "ghost" ? "ghost" : ""}`} {...props}>
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node,
  variant: PropTypes.oneOf(["primary", "secondary", "ghost"])
};
