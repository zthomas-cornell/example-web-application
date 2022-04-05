/*
Author:      Zachary Thomas
Created:     8/23/2021
Modified:    8/23/2021

Copyright 2021 © Cornell Pump Company, All Rights Reserved
-----------------------------------------------------------------
*/

import React from "react";
import { shallow } from "enzyme";
import Error500Page from "./Error500Page";

it("Component renders without crashing", () => {
  shallow(<Error500Page />);
});