/*
Author:      Zachary Thomas
Created:     12/19/2021
Modified:    12/19/2021

Copyright 2021 © Cornell Pump Company, All Rights Reserved
-----------------------------------------------------------------
*/

import React, { useState, useEffect } from "react";
import Card from "../../components/Card/Card";
import PageTitle from "../../components/PageTitle/PageTitle";
import "./UseEffectPage.scss";

// Example UseEffect page.
export default function UseEffectPage() {
  const [counter, setCounter] = useState(0);
  const [timerId, setTimerId] = useState(null);
  const TIMER_MILLISECONDS = 3000;

  // Whenever we request a new alert, create a new timer.
  useEffect(() => {
    if (counter) {
      const newTimerId = setTimeout(() =>
        alert(`You clicked the button ${counter} times!`), TIMER_MILLISECONDS
      );

      // Just saving this info so that we can display it. Not needed.
      setTimerId(newTimerId);

      return () => {
        clearTimeout(newTimerId);
      };
    }
  }, [counter]);

  // Everything inside the return is the JSX that we render.
  // Please only keep JSX here. Avoid passing JSX around outside of the return.
  return (
    <div className="page-use-effect mb-4">

      {/* Simple page title. */}
      <PageTitle title="UseEffect" />

      {/* Container with a header bar and a title. */}
      <Card title="Alert Eventually">
        <div className="alert-container text-center mx-auto my-4">
          {/* The current timer ID. */}
          <p className="h5">
            {timerId === null ? (
              "No timer set"
            ) : (
              `Timer ID: ${timerId}`
            )}
          </p>

          {/* Pressing this button causes an alert to show up after a bit of time. */}
          <button
            type="button"
            className="btn btn-success my-4"
            onClick={() => setCounter((prevCount) => prevCount + 1)}
          >
            Counter
          </button>
        </div>
      </Card>
    </div>
  );
}