/*
Author:      Zachary Thomas
Created:     6/7/2021
Modified:    6/7/2021

Copyright 2021 © Cornell Pump Company, All Rights Reserved
-----------------------------------------------------------------
*/

import React from "react";
import { shallow } from "enzyme";
import ConfirmModal from "./ConfirmModal";

test("Component renders without crashing", () => {
  shallow(
    <ConfirmModal
      showModal={true}
      title="Delete object?"
      content="Are you sure that you want to delete this object?"
      yesText="Delete object"
      noText="Cancel"
      danger={true}
      onClose={() => { }}
      onYes={() => { }}
      onNo={() => { }}
    />
  );
});