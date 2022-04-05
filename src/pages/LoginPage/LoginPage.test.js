/*
Author:      Zachary Thomas
Created:     6/8/2021
Modified:    6/8/2021

Copyright 2021 © Cornell Pump Company, All Rights Reserved
-----------------------------------------------------------------
*/

import React from "react";
import { shallow } from "enzyme";
import LoginPage from "./LoginPage";

it("Component renders without crashing", () => {
  shallow(<LoginPage />);
});