/*
Author:      Zachary Thomas
Created:     9/21/2021
Modified:    9/29/2021

Copyright 2021 © Cornell Pump Company, All Rights Reserved
-----------------------------------------------------------------
*/

import React from "react";
import PropTypes from "prop-types";
import { Modal as ModalReact } from "react-bootstrap";
import "./Modal.scss";

// Generic modal.
export default function Modal(props) {
  return (
    <ModalReact
      dialogClassName={props.dialogClassName}
      backdropClassName={props.backdropClassName}
      show={props.show}
      onHide={props.onHide}
      size={props.size}
      animation={props.animation}
      centered={props.centered}
    >
      {props.children}
    </ModalReact>
  );
}

Modal.propTypes = {
  show: PropTypes.bool.isRequired,
  onHide: PropTypes.func.isRequired,
  dialogClassName: PropTypes.string,
  backdropClassName: PropTypes.string,
  size: PropTypes.string,
  animation: PropTypes.bool,
  centered: PropTypes.bool,
  children: PropTypes.node
};