/*
Author:      Zachary Thomas
Created:     6/3/2021
Modified:    6/3/2021

Copyright 2021 © Cornell Pump Company, All Rights Reserved
-----------------------------------------------------------------
*/

import React from "react";
import { shallow } from "enzyme";
import Card from "./Card";

it("Component renders without crashing - single tag", () => {
  shallow(
    <Card title="Example Title" />
  );
});

it("Component renders without crashing - two tags, empty", () => {
  shallow(
    <Card title="Example Title">
    </Card>
  );
});

it("Component renders without crashing - two tags, with content", () => {
  shallow(
    <Card title="Example Title">
      <p>Example Content</p>
    </Card>
  );
});