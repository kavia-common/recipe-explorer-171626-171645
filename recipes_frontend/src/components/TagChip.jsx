import React from "react";
import PropTypes from "prop-types";

/**
 * PUBLIC_INTERFACE
 * TagChip shows a compact tag label.
 */
export default function TagChip({ label }) {
  /** Small badge-like tag */
  return <span className="badge" role="note" aria-label={`Tag ${label}`}>#{label}</span>;
}

TagChip.propTypes = {
  label: PropTypes.string.isRequired
};
