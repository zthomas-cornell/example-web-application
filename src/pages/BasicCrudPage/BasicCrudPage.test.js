/*
Author:      Zachary Thomas
Created:     1/6/2022
Modified:    1/6/2022

Copyright 2022 © Cornell Pump Company, All Rights Reserved
-----------------------------------------------------------------
*/

import React from "react";
import { shallow } from "enzyme";
import BasicCrudPage from "./BasicCrudPage";

it("Component renders without crashing", () => {
  shallow(<BasicCrudPage />);
});