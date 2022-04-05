/*
Author:      Zachary Thomas
Created:     5/14/2021
Modified:    5/14/2021

Copyright 2021 © Cornell Pump Company, All Rights Reserved
-----------------------------------------------------------------
*/

import React from "react";
import { shallow } from "enzyme";
import TextBlurb from "./TextBlurb";

it("Component renders without crashing", () => {
  shallow(
    <TextBlurb
      title="Title"
      paragraph="This is example text."
      icon="exclamation-triangle"
    />
  );
});