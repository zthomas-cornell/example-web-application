/*
Author:      Zachary Thomas
Created:     9/2/2021
Modified:    9/2/2021

Copyright 2021 © Cornell Pump Company, All Rights Reserved
-----------------------------------------------------------------
*/

import React from "react";
import { shallow } from "enzyme";
import BasicRenderingPage from "./BasicRenderingPage";

it("Component renders without crashing", () => {
  shallow(<BasicRenderingPage />);
});