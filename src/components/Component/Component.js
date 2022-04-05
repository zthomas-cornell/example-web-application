/*
Author:      Zachary Thomas
Created:     9/1/2021
Modified:    12/14/2021

Copyright 2021 © Cornell Pump Company, All Rights Reserved
-----------------------------------------------------------------
*/

import React from "react";
import PropTypes from "prop-types";
import "./Component.scss";

// Example component to be used as a simple template for other components.
export default function Component(props) {
  return (
    <div className="component-template">
      {props.message}
    </div>
  );
}

Component.propTypes = {
  message: PropTypes.string.isRequired,
};