/*
Author:      Zachary Thomas
Created:     1/12/2022
Modified:    1/12/2022

Copyright 2022 © Cornell Pump Company, All Rights Reserved
-----------------------------------------------------------------
*/

import React from "react";
import { shallow } from "enzyme";
import Context from "./Context";

it("Component renders without crashing", () => {
  shallow(
    <Context.Provider />
  );
});