/*
Author:      Zachary Thomas
Created:     1/6/2022
Modified:    1/6/2022

Copyright 2022 © Cornell Pump Company, All Rights Reserved
-----------------------------------------------------------------
*/

import React from "react";
import { shallow } from "enzyme";
import NoteModal from "./NoteModal";

test("Component renders without crashing", () => {
  shallow(
    <NoteModal
      mode="edit"
      showModal={true}
      selectedNote={{ noteId: 1, title: "Hello", description: "There" }}
      onClose={() => { }}
      onAction={() => { }}
    />
  );
});