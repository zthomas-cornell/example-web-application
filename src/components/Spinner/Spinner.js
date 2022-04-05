/*
Author:      Zachary Thomas
Created:     5/14/2021
Modified:    8/10/2021

Copyright 2021 © Cornell Pump Company, All Rights Reserved
-----------------------------------------------------------------
*/

import React from "react";
import PropTypes from "prop-types";
import "./Spinner.scss";

// Centered spinner that lets the user know something is loading.
export default function Spinner(props) {
  return (
    (props.loading && (
      <div className="spin-loader">
        <div role="status" className="spinner-border fast mt-5" style={{ width: "12rem", height: "12rem" }}>
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    ))
  );
}

Spinner.propTypes = {
  loading: PropTypes.bool.isRequired
};