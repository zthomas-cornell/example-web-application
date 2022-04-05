/*
Author:      Zachary Thomas
Created:     1/6/2022
Modified:    1/6/2022

Copyright 2022 © Cornell Pump Company, All Rights Reserved
-----------------------------------------------------------------
*/

import React from "react";
import PropTypes from "prop-types";
import {
  MAX_NOTE_TITLE_LENGTH,
  MAX_NOTE_DESCRIPTION_LENGTH
} from "../../../../utilities/constants";
import "./NoteForm.scss";

// Form for writing a note.
export default function NoteForm(props) {
  return (
    <div className="note-form">
      <div className="mx-3 mb-3">
        <label className="mb-3">
          Title
        </label>
        <input
          className="form-control mx-auto"
          type="text"
          maxLength={MAX_NOTE_TITLE_LENGTH}
          value={props.title}
          onChange={(e) => props.onChangeTitle(e.target.value)}
        />
      </div>

      <div className="mx-3 mb-3">
        <label className="mb-3">
          Description
        </label>
        <textarea
          className="form-control mx-auto"
          type="text-area"
          rows="3"
          maxLength={MAX_NOTE_DESCRIPTION_LENGTH}
          value={props.description}
          onChange={(e) => props.onChangeDescription(e.target.value)}
        />
      </div>
    </div>
  );
}

NoteForm.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  onChangeTitle: PropTypes.func.isRequired,
  onChangeDescription: PropTypes.func.isRequired
};