/*
Author:      Zachary Thomas
Created:     1/12/2022
Modified:    1/12/2022

Copyright 2021 © Cornell Pump Company, All Rights Reserved
-----------------------------------------------------------------
*/

import React, { useContext } from "react";
import Context from "../../../components/Context/Context";
import "./TextSelector.scss";

// Used to change the text value in context.
export default function TextSelector() {
  const context = useContext(Context);

  // Update and save the text change.
  function updateText(text) {
    context.setText(text);
    localStorage.setItem("contextText", text);
  }

  return (
    <div className="text-selector-container">
      <div className="title py-3" style={{ backgroundColor: context.color }}>
        Change Text
      </div>
      <textarea
        className="form-control w-75 mx-auto my-4"
        rows="3"
        value={context.text}
        onChange={(e) => updateText(e.target.value)}
      />

    </div>
  );
}