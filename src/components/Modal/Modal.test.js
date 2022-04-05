/*
Author:      Zachary Thomas
Created:     9/21/2021
Modified:    9/21/2021

Copyright 2021 © Cornell Pump Company, All Rights Reserved
-----------------------------------------------------------------
*/

import React from "react";
import { shallow } from "enzyme";
import Modal from "./Modal";

it("Component renders without crashing", () => {
  shallow(
    <Modal
      dialogClassName={"test"}
      show={true}
      onHide={() => { }}
      size="xl"
      animation
      centered
    />
  );
});