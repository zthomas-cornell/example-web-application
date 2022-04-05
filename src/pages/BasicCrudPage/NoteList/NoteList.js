/*
Author:      Zachary Thomas
Created:     1/6/2022
Modified:    2/22/2022

Copyright 2022 © Cornell Pump Company, All Rights Reserved
-----------------------------------------------------------------
*/

import React from "react";
import PropTypes from "prop-types";
import "./NoteList.scss";

// A list of notes that support creation, updating, and deletion.
export default function NoteList(props) {
  return (
    <div className="note-list">
      <div className="list-header p-4">
        <div className="row align-items-top">
          <div className="list-title col">
            <span className="align-top">Notes</span>
          </div>

          {/* Button for creating new notes. */}
          <div className="col">
            <button
              className="create-btn btn btn-light float-end"
              onClick={() => props.onSelect(0)}
            >
              Create Note
            </button>
          </div>
        </div>
      </div>

      <div className="list-body">
        {/* List of interactive notes. */}
        {!props.loading && props.notes.map(note =>
          <div
            key={note.noteId}
            className="list-item selectable-container px-3 py-2"
            onClick={() => props.onSelect(note.noteId)}
          >
            {note.title}
          </div>
        )}

        {props.notes.length === 0 && !props.loading && (
          <div className="empty-list py-5 px-4">
            There are no notes to display
          </div>
        )}
      </div>
    </div>
  );
}

NoteList.propTypes = {
  loading: PropTypes.bool,
  notes: PropTypes.array.isRequired,
  onSelect: PropTypes.func.isRequired
};