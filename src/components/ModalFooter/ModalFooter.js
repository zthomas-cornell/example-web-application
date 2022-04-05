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
import "./ModalFooter.scss";

// Generic modal footer.
export default function ModalFooter(props) {
  return (
    <Modal.Footer
      className={props.className}
    >
      {props.children}
    </Modal.Footer>
  );
}

ModalFooter.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
};