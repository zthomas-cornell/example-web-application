/*
Author:      Zachary Thomas
Created:     1/12/2022
Modified:    1/12/2022

Copyright 2021 © Cornell Pump Company, All Rights Reserved
-----------------------------------------------------------------
*/

import React from "react";
import { shallow } from "enzyme";
import Context from "../../../components/Context/Context";
import ColorSelector from "./ColorSelector";

it("Component renders without crashing", () => {
  const value = {
    text: "",
    setText: () => { },
    color: "#000000",
    setColor: () => { },
  }
  shallow(
    <Context.Provider value={value}>
      <ColorSelector />
    </Context.Provider>
  );
});