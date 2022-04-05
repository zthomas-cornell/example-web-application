/*
Author:      Zachary Thomas
Created:     1/6/2022
Modified:    1/6/2022

Copyright 2022 © Cornell Pump Company, All Rights Reserved
-----------------------------------------------------------------
*/

import React, { useState, useEffect, Fragment } from "react";
import ConfirmModal from "../../../components/ConfirmModal/ConfirmModal";
import SaveChangesModal from "../../../components/SaveChangesModal/SaveChangesModal";
import Modal from "../../../components/Modal/Modal";
import ModalHeader from "../../../components/ModalHeader/ModalHeader";
import ModalBody from "../../../components/ModalBody/ModalBody";
import ModalFooter from "../../../components/ModalFooter/ModalFooter";
import Error from "../../../components/Error/Error";
import Spinner from "../../../components/Spinner/Spinner";
import NoteForm from "./NoteForm/NoteForm";
import PropTypes from "prop-types";
import {
  MIN_NOTE_TITLE_LENGTH,
  MAX_NOTE_TITLE_LENGTH,
  MIN_NOTE_DESCRIPTION_LENGTH,
  MAX_NOTE_DESCRIPTION_LENGTH
} from "../../../utilities/constants";
import "./NoteModal.scss";

// Modal for creating, editing, and deleting notes.
export default function NoteModal(props) {
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [showConfirmDelete, setShowConfirmDelete] = useState(false);
  const [showConfirmExit, setShowConfirmExit] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  // Update state when selected note prop changes.
  useEffect(() => {
    if (props.showModal) {
      setTitle(props.selectedNote.title);
      setDescription(props.selectedNote.description);
    }
  }, [props.showModal, JSON.stringify(props.selectedNote)]);

  // Validate the note.
  function noteIsValid() {
    if (title.length < MIN_NOTE_TITLE_LENGTH || title.length > MAX_NOTE_TITLE_LENGTH) {
      setErrorMessage(
        `The title must be between ${MIN_NOTE_TITLE_LENGTH}`
        + `and ${MAX_NOTE_TITLE_LENGTH} characters long.`
      );
      return false;
    } else if (description.length < MIN_NOTE_DESCRIPTION_LENGTH || description.length > MAX_NOTE_DESCRIPTION_LENGTH) {
      setErrorMessage(
        `The description must be between ${MIN_NOTE_DESCRIPTION_LENGTH}`
        + `and ${MAX_NOTE_DESCRIPTION_LENGTH} characters long.`
      );
      return false;
    } else {
      return true;
    }
  }

  // Create a note.
  async function createNote() {
    if (noteIsValid()) {
      setLoading(true);
      // This is where we would make an API request to create a new note.
      // If our API request was successful, then we would dispatch a CREATE_NOTE action.
      setLoading(false);
      // Since we don't have any API to give us a unique ID, we will use the current millisecond since 1970.
      const newNoteId = Date.now();
      const newNote = {
        noteId: newNoteId,
        title: title,
        description: description
      };
      props.onAction("CREATE_NOTE", newNote);
      dontSaveChanges();
    }
  }

  // Edit a note.
  async function editNote(noteId) {
    if (noteIsValid()) {
      setLoading(true);
      // This is where we would make an API request to update a note.
      // If our API request was successful, then we would dispatch an UPDATE_NOTE action.
      setLoading(false);
      const updatedNote = {
        noteId: noteId,
        title: title,
        description: description
      };
      props.onAction("UPDATE_NOTE", updatedNote);
      setErrorMessage("");
      props.onClose();
    }
  }

  // Delete a note.
  async function deleteNote(noteId) {
    setLoading(true);
    // This is where we would make an API request to delete a note.
    // If our API request was successful, then we would dispatch a DELETE_NOTE action.
    setLoading(false);
    setShowConfirmDelete(false);
    props.onClose();
    props.onAction("DELETE_NOTE", { noteId: noteId });
  }

  // Exit modal if no changes have been made. Otherwise prompt user.
  function exitModal() {
    // Check to see if state is the same as props.
    if (
      title === props.selectedNote.title
      && description === props.selectedNote.description
    ) {
      // Since there have been no changes we can safely exit.
      dontSaveChanges();
    } else {
      // We have unsaved changes, give the user a chance to save them.
      setShowConfirmExit(true);
    }
  }

  // Save changes.
  function saveChanges() {
    if (props.mode === "create") {
      createNote();
    } else {
      editNote(props.selectedNote.noteId);
    }
    setShowConfirmExit(false);
  }

  // Exit without saving changes.
  function dontSaveChanges() {
    setShowConfirmExit(false);
    setErrorMessage("");
    props.onClose();
  }

  return (
    <div className="note-modal-container">
      <Spinner loading={loading} />

      <Modal
        show={props.showModal}
        onHide={() => exitModal()}
        size="lg"
        animation
        centered
      >
        <ModalHeader>
          <h5 className="modal-title font-weight-bold">
            {props.mode === "create" ? (
              <span>Create Note</span>
            ) : (
              <span>Edit Note</span>
            )}
          </h5>
        </ModalHeader>

        <ModalBody>
          <NoteForm
            title={title}
            description={description}
            onChangeTitle={title => setTitle(title)}
            onChangeDescription={description => setDescription(description)}
          />

          {errorMessage.length > 0 && (
            <div className="row">
              <div className="col mt-4 mx-2">
                <Error message={errorMessage} />
              </div>
            </div>
          )}
        </ModalBody>

        <ModalFooter>
          {props.mode === "create" ? (
            <Fragment>
              <button className="btn btn-success" type="button" onClick={() => createNote()}>
                Create Note
              </button>

              <button className="btn btn-secondary" type="button" onClick={() => exitModal()}>
                Cancel
              </button>
            </Fragment>
          ) : (
            <Fragment>
              <button className="btn btn-danger me-auto" type="button" onClick={() => setShowConfirmDelete(true)}>
                Delete
              </button>

              <button className="btn btn-success" type="button" onClick={() => editNote(props.selectedNote.noteId)}>
                Save Changes
              </button>

              <button className="btn btn-secondary" type="button" onClick={() => exitModal()}>
                Cancel
              </button>
            </Fragment>
          )}
        </ModalFooter>
      </Modal>

      <ConfirmModal
        showModal={props.showModal && showConfirmDelete}
        title="Delete note?"
        content={"Are you sure that you want to delete the note? This action cannot be undone."}
        yesText="Delete Note Note"
        noText="Cancel"
        danger={true}
        onClose={() => setShowConfirmDelete(false)}
        onYes={() => deleteNote(props.selectedNote.noteId)}
        onNo={() => setShowConfirmDelete(false)}
      />

      <SaveChangesModal
        showModal={props.showModal && showConfirmExit}
        title="Changes have not been saved!"
        content="Are you sure that you want to exit without saving your changes?"
        onClose={() => setShowConfirmExit(false)}
        onSave={() => saveChanges()}
        onNoSave={() => dontSaveChanges()}
      />
    </div>
  );
}

NoteModal.propTypes = {
  mode: PropTypes.oneOf(["create", "edit"]).isRequired,
  showModal: PropTypes.bool.isRequired,
  selectedNote: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
  onAction: PropTypes.func.isRequired,
};