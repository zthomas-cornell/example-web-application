/*
Author:      Zachary Thomas
Created:     9/21/2021
Modified:    9/21/2021

Copyright 2021 © Cornell Pump Company, All Rights Reserved
-----------------------------------------------------------------
*/

import React from "react";
import PropTypes from "prop-types";
import Modal from "react-bootstrap/Modal";
import "./ModalTitle.scss";

// Generic modal title.
export default function ModalTitle(props) {
  return (
    <Modal.Title
      className={props.className}
    >
      {props.children}
    </Modal.Title>
  );
}

ModalTitle.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
};