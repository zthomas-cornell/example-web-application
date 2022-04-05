/*
Author:      Zachary Thomas
Created:     1/6/2022
Modified:    1/6/2022

Copyright 2022 © Cornell Pump Company, All Rights Reserved
-----------------------------------------------------------------
*/

import React from "react";
import { shallow } from "enzyme";
import NoteList from "./NoteList";

it("Component renders without crashing", () => {
  shallow(
    <NoteList
      loading={false}
      notes={[{ noteId: 1, title: "", description: "" }]}
      onSelect={() => { }}
    />
  );
});