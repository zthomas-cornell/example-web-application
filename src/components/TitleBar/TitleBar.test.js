/*
Author:      Zachary Thomas
Created:     5/14/2021
Modified:    5/14/2021

Copyright 2021 © Cornell Pump Company, All Rights Reserved
-----------------------------------------------------------------
*/

import React from "react";
import { shallow } from "enzyme";
import TitleBar from "./TitleBar";

it("Component renders without crashing", () => {
  shallow(
    <TitleBar
      size={1}
      title="test"
    />
  );
});