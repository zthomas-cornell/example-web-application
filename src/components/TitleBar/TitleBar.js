/*
Author:      Zachary Thomas
Created:     5/14/2021
Modified:    5/14/2021

Copyright 2021 © Cornell Pump Company, All Rights Reserved
-----------------------------------------------------------------
*/

import React from "react";
import PropTypes from "prop-types";
import "./TitleBar.scss";

// Simple bar with title.
export default function TitleBar(props) {
  return (
    <div className={`title-bar title-bar-size-${props.size} py-3`}>
      {props.title}
    </div>
  );
}

TitleBar.propTypes = {
  size: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired
};