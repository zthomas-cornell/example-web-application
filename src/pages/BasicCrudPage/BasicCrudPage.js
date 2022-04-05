/*
Author:      Zachary Thomas
Created:     1/6/2022
Modified:    1/6/2022

Copyright 2022 © Cornell Pump Company, All Rights Reserved
-----------------------------------------------------------------
*/

import React, { useState, useEffect, useReducer } from "react";
import PageTitle from "../../components/PageTitle/PageTitle";
import NoteList from "./NoteList/NoteList";
import NoteModal from "./NoteModal/NoteModal";
import deepCopy from "../../utilities/deepCopy";
import "./BasicCrudPage.scss";

// Example basic CRUD page.
export default function BasicCrudPage() {
  const types = {
    SET_NOTES: "SET_NOTES",
    CREATE_NOTE: "CREATE_NOTE",
    UPDATE_NOTE: "UPDATE_NOTE",
    DELETE_NOTE: "DELETE_NOTE"
  };
  const initialNote = {
    noteId: 0,
    title: "",
    description: ""
  };
  const [mode, setMode] = useState("create");
  const [selectedId, setSelectedId] = useState(-1);
  const [selectedNote, setSelectedNote] = useState(initialNote);
  const [notes, dispatch] = useReducer(noteReducer, []);

  // These are our initial notes, normally we would get these from an API call.
  useEffect(() => {
    const apiNotes = [{
      noteId: 1,
      title: "Grocery List",
      description: "Apples, Broccoli, Eggs, Oatmeal, Walnuts"
    },
    {
      noteId: 2,
      title: "Albert Einstein Quote",
      description: "Life is like riding a bicycle. To keep your balance, you must keep moving."
    },
    {
      noteId: 3,
      title: "Sicilian Defense",
      description: "e4 c5, Nf3 d6, d4 cxd4, Nxd4 Nf6, Nc3 a6, Be3 e6, f3 b5"
    },
    {
      noteId: 4,
      title: "IMDb Top 3 Movies",
      description: "The Shawshank Redemption, The Godfather, The Godfather: Part II"
    },
    {
      noteId: 5,
      title: "Mahatma Gandhi Quote",
      description: "Strength does not come from physical capacity. It comes from an indomitable will."
    }];
    dispatch({ type: types.SET_NOTES, payload: apiNotes });
  }, []);

  // If the selected ID changes, update the selected note, and mode.
  useEffect(() => {
    const index = notes.findIndex(note =>
      note.noteId === selectedId
    );

    if (index === -1) {
      setSelectedNote(initialNote);
    } else {
      setSelectedNote(notes[index]);
    }

    if (selectedId === 0) {
      setMode("create");
    } else if (selectedId > 0) {
      setMode("edit");
    }
  }, [selectedId, JSON.stringify(notes)]);

  // Sort notes by title.
  function sortNotes(notes) {
    return notes.sort((a, b) => {
      if (a.title < b.title) {
        return -1;
      } else if (a.title > b.title) {
        return 1;
      } else {
        return 0;
      }
    });
  }

  // Note reducer.
  function noteReducer(state, action) {
    switch (action.type) {
      case types.SET_NOTES: {
        action.payload = sortNotes(action.payload);
        return action.payload;
      }

      case types.CREATE_NOTE: {
        let stateShallowCopy = [...state, action.payload];
        stateShallowCopy = sortNotes(stateShallowCopy);
        return stateShallowCopy;
      }

      case types.UPDATE_NOTE: {
        let stateDeepCopy = deepCopy(state);
        const noteIndex = state.findIndex(note =>
          note.noteId === action.payload.noteId
        );
        if (noteIndex === -1) {
          return stateDeepCopy;
        } else {
          stateDeepCopy.splice(noteIndex, 1, action.payload);
          stateDeepCopy = sortNotes(stateDeepCopy);
          return stateDeepCopy;
        }
      }

      case types.DELETE_NOTE: {
        const stateDeepCopy = deepCopy(state);
        const noteIndex = state.findIndex(note =>
          note.noteId === action.payload.noteId
        );
        if (noteIndex === -1) {
          return stateDeepCopy;
        } else {
          stateDeepCopy.splice(noteIndex, 1);
          return stateDeepCopy;
        }
      }

      default: {
        return state;
      }
    }
  }

  return (
    <div className="page-crud mb-4">
      {/* Simple page title. */}
      <PageTitle title="CRUD Functions" />

      <NoteList
        notes={notes}
        onSelect={selectedId => setSelectedId(selectedId)}
      />

      <NoteModal
        mode={mode}
        showModal={selectedId !== -1}
        selectedNote={selectedNote}
        onClose={() => setSelectedId(-1)}
        onAction={(type, payload) => dispatch({ type: type, payload: payload })}
      />
    </div>
  );
}