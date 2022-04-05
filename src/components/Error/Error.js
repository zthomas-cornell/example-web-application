/*
Author:      Zachary Thomas
Created:     5/14/2021
Modified:    12/14/2021

Copyright 2021 © Cornell Pump Company, All Rights Reserved
-----------------------------------------------------------------
*/

import React from "react";
import PropTypes from "prop-types";
import "./Error.scss";

// Error message.
export default function Error(props) {
  return (
    (props.message.length > 0 && (
      <div className="alert alert-danger" role="alert">
        {props.message}
      </div>
    ))
  );
}

Error.propTypes = {
  message: PropTypes.string.isRequired
};