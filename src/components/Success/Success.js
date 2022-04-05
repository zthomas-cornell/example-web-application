/*
Author:      Zachary Thomas
Created:     6/9/2021
Modified:    6/9/2021

Copyright 2021 © Cornell Pump Company, All Rights Reserved
-----------------------------------------------------------------
*/

import React from "react";
import PropTypes from "prop-types";
import "./Success.scss";

// Success message.
export default function Success(props) {
  return (
    (props.message.length > 0 && (
      <div className="alert alert-success" role="alert">
        {props.message}
      </div>
    ))
  );
}

Success.propTypes = {
  message: PropTypes.string.isRequired
};