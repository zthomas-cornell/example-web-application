/*
Author:      Zachary Thomas
Created:     10/22/2021
Modified:    10/22/2021

Copyright 2021 © Cornell Pump Company, All Rights Reserved
-----------------------------------------------------------------
*/

import React from "react";
import { shallow } from "enzyme";
import BasicMapPage from "./BasicMapPage";

it("Component renders without crashing", () => {
  shallow(<BasicMapPage />);
});