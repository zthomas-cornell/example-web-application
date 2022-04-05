/*
Author:      Zachary Thomas
Created:     9/1/2021
Modified:    9/1/2021

Copyright 2021 © Cornell Pump Company, All Rights Reserved
-----------------------------------------------------------------
*/

import React from "react";
import { shallow } from "enzyme";
import Component from "./Component";

it("Component renders without crashing", () => {
  shallow(
    <Component message="Hello World" />
  );
});