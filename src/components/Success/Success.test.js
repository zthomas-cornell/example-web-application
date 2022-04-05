/*
Author:      Zachary Thomas
Created:     6/9/2021
Modified:    6/9/2021

Copyright 2021 © Cornell Pump Company, All Rights Reserved
-----------------------------------------------------------------
*/

import React from "react";
import { shallow } from "enzyme";
import Success from "./Success";

it("Component renders without crashing", () => {
  shallow(<Success message="test" />);
});