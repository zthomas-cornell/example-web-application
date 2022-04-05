/*
Author:      Zachary Thomas
Created:     1/12/2022
Modified:    1/12/2022

Copyright 2021 © Cornell Pump Company, All Rights Reserved
-----------------------------------------------------------------
*/

import React, { useContext } from "react";
import Context from "../../../components/Context/Context";
import "./ColorSelector.scss";

// Used to change the color value in context.
export default function ColorSelector() {
  const context = useContext(Context);

  // Update and save the color change.
  function updateColor(color) {
    context.setColor(color);
    localStorage.setItem("contextColor", color);
  }

  return (
    <div className="color-selector-container">
      <div className="title py-3" style={{ backgroundColor: context.color }}>
        <div className="row">
          <div className="col-8">
            Change Color
          </div>

          <div className="col-4">
            <input
              className="color-picker"
              type="color"
              value={context.color}
              onChange={e => updateColor(e.target.value)}
            />
          </div>
        </div>
      </div>

      <p className="m-4">
        {context.text}
      </p>
    </div>
  );
}