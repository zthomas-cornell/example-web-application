/*
Author:      Zachary Thomas
Created:     12/19/2021
Modified:    12/19/2021

Copyright 2021 © Cornell Pump Company, All Rights Reserved
-----------------------------------------------------------------
*/

import React from "react";
import { shallow } from "enzyme";
import UseEffectPage from "./UseEffectPage";

it("Component renders without crashing", () => {
  shallow(<UseEffectPage />);
});