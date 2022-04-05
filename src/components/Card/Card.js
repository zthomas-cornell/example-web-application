/*
Author:      Zachary Thomas
Created:     6/3/2021
Modified:    12/14/2021

Copyright 2021 © Cornell Pump Company, All Rights Reserved
-----------------------------------------------------------------
*/

import React from "react";
import PropTypes from "prop-types";
import TitleBar from "../TitleBar/TitleBar";
import "./Card.scss";

// Simple card with title.
export default function Card(props) {
  return (
    <div className="simple-card">
      <TitleBar size={2} title={props.title} />
      {props.children}
    </div>
  );
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node
};