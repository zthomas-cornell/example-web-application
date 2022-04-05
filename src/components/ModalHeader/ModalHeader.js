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
import "./ModalHeader.scss";

// Generic modal header.
export default function ModalHeader(props) {
  return (
    <Modal.Header
      className={props.className}
    >
      {props.children}
    </Modal.Header>
  );
}

ModalHeader.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
};