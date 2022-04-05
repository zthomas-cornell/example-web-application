/*
Author:      Zachary Thomas
Created:     6/8/2021
Modified:    10/22/2021

Copyright 2021 © Cornell Pump Company, All Rights Reserved
-----------------------------------------------------------------
*/

import React from "react";
import { shallow } from "enzyme";
import LoginForm from "./LoginForm";

it("Component renders without crashing", () => {
  shallow(
    <LoginForm
      errorMessage="You must enter an email address."
      onSubmit={() => { }}
      onSkip={() => { }}
    />
  );
});