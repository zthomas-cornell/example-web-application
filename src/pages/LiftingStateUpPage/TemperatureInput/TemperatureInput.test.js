/*
Author:      Zachary Thomas
Created:     9/5/2021
Modified:    9/5/2021

Copyright 2021 © Cornell Pump Company, All Rights Reserved
-----------------------------------------------------------------
*/

import React from "react";
import { shallow } from "enzyme";
import TemperatureInput from "./TemperatureInput";

it("Component renders without crashing", () => {
  shallow(
    <TemperatureInput
      temperature={"32"}
      temperatureUnit="fahrenheit"
      onTemperatureChange={() => { }}
    />
  );
});