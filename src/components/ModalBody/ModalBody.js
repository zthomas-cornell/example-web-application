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
import "./ModalBody.scss";

// Generic modal body.
export default function ModalBody(props) {
  return (
    <Modal.Body
      className={props.className}
    >
      {props.children}
    </Modal.Body>
  );
}

ModalBody.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
};