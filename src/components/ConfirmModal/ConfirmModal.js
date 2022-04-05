/*
Author:      Zachary Thomas
Created:     6/7/2021
Modified:    9/30/2021

Copyright 2021 © Cornell Pump Company, All Rights Reserved
-----------------------------------------------------------------
*/

import React from "react";
import PropTypes from "prop-types";
import Modal from "../Modal/Modal";
import ModalHeader from "../ModalHeader/ModalHeader";
import ModalBody from "../ModalBody/ModalBody";
import ModalFooter from "../ModalFooter/ModalFooter";
import "./ConfirmModal.scss";

// Modal for confirming or declining an action.
export default function ConfirmModal(props) {
  return (
    <div className="confirm-modal">
      <Modal
        show={props.showModal}
        onHide={() => props.onClose()}
        backdropClassName={"confirm-top-level-backdrop"}
        animation
        centered
      >
        <ModalHeader>
          <h5 className="modal-title">
            {props.title}
          </h5>
        </ModalHeader>
        <ModalBody>
          <p>
            {props.content}
          </p>
        </ModalBody>
        <ModalFooter>
          <button
            type="button"
            className={`btn ${props.danger ? "btn-danger" : "btn-primary"}`}
            data-dismiss="modal"
            onClick={() => props.onYes()}
          >
            {props.yesText}
          </button>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => props.onNo()}
          >
            {props.noText}
          </button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

ConfirmModal.propTypes = {
  showModal: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  yesText: PropTypes.string.isRequired,
  noText: PropTypes.string.isRequired,
  danger: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onYes: PropTypes.func.isRequired,
  onNo: PropTypes.func.isRequired
};