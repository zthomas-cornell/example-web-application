/*
Author:      Zachary Thomas
Created:     6/2/2021
Modified:    6/2/2021

Copyright 2021 © Cornell Pump Company, All Rights Reserved
-----------------------------------------------------------------
*/

import React from "react";
import PropTypes from "prop-types";
import "./PageTitle.scss";

// Simple page title.
export default function PageTitle(props) {
  return (
    <div className="page-title mt-4 mb-5">
      {props.title}
    </div>
  );
}

PageTitle.propTypes = {
  title: PropTypes.string.isRequired
};