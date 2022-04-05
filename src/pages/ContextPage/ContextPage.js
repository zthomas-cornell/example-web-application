/*
Author:      Zachary Thomas
Created:     1/12/2022
Modified:    1/12/2022

Copyright 2022 © Cornell Pump Company, All Rights Reserved
-----------------------------------------------------------------
*/

import React, { useState, useEffect } from "react";
import Card from "../../components/Card/Card";
import Context from "../../components/Context/Context";
import PageTitle from "../../components/PageTitle/PageTitle";
import TextSelector from "./TextSelector/TextSelector";
import ColorSelector from "./ColorSelector/ColorSelector";
import "./ContextPage.scss";

// Example page showing how context can be used.
export default function ContextPage() {
  const [text, setText] = useState("");
  const [color, setColor] = useState("#1265b2");

  // Get the saved context between page reloads.
  useEffect(() => {
    const contextText = localStorage.getItem("contextText");
    if (contextText) {
      setText(contextText);
    }

    const contextColor = localStorage.getItem("contextColor");
    if (contextColor) {
      setColor(contextColor);
    }
  }, []);

  // Everything inside the return is the JSX that we render.
  // Please only keep JSX here. Avoid passing JSX around outside of the return.
  return (
    <Context.Provider value={{ text, setText, color, setColor }}>
      <div className="page-context mb-4">
        {/* Simple page title. */}
        <PageTitle title="Context" />

        {/* Container with a header bar and a title. */}
        <Card title="Context Example">
          <div className="row m-4">
            <div className="col">
              <TextSelector />
            </div>

            <div className="col">
              <ColorSelector />
            </div>
          </div>
        </Card>

      </div>
    </Context.Provider>
  );
}