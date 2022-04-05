/*
Author:      Zachary Thomas
Created:     6/2/2021
Modified:    6/2/2021

Copyright 2021 © Cornell Pump Company, All Rights Reserved
-----------------------------------------------------------------
*/

import React from "react";
import { shallow } from "enzyme";
import PageTitle from "./PageTitle";

it("Component renders without crashing", () => {
  shallow(
    <PageTitle
      title="Example Page"
    />
  );
});