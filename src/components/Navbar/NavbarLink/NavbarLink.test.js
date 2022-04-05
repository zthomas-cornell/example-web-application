/*
Author:      Zachary Thomas
Created:     5/14/2021
Modified:    8/5/2021

Copyright 2021 © Cornell Pump Company, All Rights Reserved
-----------------------------------------------------------------
*/

import React from "react";
import { shallow } from "enzyme";
import NavbarLink from "./NavbarLink";

it("Component renders without crashing", () => {
  shallow(
    <NavbarLink
      name="home"
      targetPage="/"
      currentPage="/"
    />
  );
});