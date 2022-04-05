/*
Author:      Zachary Thomas
Created:     9/29/2021
Modified:    9/29/2021

Copyright 2021 © Cornell Pump Company, All Rights Reserved
-----------------------------------------------------------------
*/

import React from "react";
import { shallow } from "enzyme";
import SaveChangesModal from "./SaveChangesModal";

test("Component renders without crashing", () => {
  shallow(
    <SaveChangesModal
      showModal={true}
      title="Delete object?"
      content="Are you sure that you want to delete this object?"
      onClose={() => { }}
      onSave={() => { }}
      onNoSave={() => { }}
    />
  );
});