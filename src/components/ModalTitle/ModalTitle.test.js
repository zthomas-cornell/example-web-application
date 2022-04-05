/*
Author:      Zachary Thomas
Created:     9/21/2021
Modified:    9/21/2021

Copyright 2021 © Cornell Pump Company, All Rights Reserved
-----------------------------------------------------------------
*/

import React from "react";
import { shallow } from "enzyme";
import ModalTitle from "./ModalTitle";

it("Component renders without crashing", () => {
  shallow(
    <ModalTitle
      className="test"
    />
  );
});