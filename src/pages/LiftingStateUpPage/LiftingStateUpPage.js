/*
Author:      Zachary Thomas
Created:     9/5/2021
Modified:    9/6/2021

Copyright 2021 © Cornell Pump Company, All Rights Reserved
-----------------------------------------------------------------
*/

import React, { useState } from "react";
import Card from "../../components/Card/Card";
import PageTitle from "../../components/PageTitle/PageTitle";
import TemperatureInput from "./TemperatureInput/TemperatureInput";
import "./LiftingStateUpPage.scss";

// Example lifting state up page.
export default function LiftingStateUpPage() {
  const [fahrenheit, setFahrenheit] = useState("32");
  const [celsius, setCelsius] = useState("0");

  // Update temperature.
  function updateTemperature(temperature, temperatureUnit) {
    if (temperatureUnit === "fahrenheit") {
      setFahrenheit(String(temperature));
      setCelsius(String((temperature - 32) * 5 / 9));

    } else if (temperatureUnit === "celsius") {
      setCelsius(String(temperature));
      setFahrenheit(String((temperature * 9 / 5) + 32));
    }
  }

  // Everything inside the return is the JSX that we render.
  // Please only keep JSX here. Avoid passing JSX around outside of the return.
  return (
    <div className="page-lifting-state-up mb-4">
      {/* Simple page title. */}
      <PageTitle title="Lifting State Up" />

      {/* Container with a header bar and a title. */}
      <Card title="Temperature Calculator">

        {/* These child components takes the current temperature to display (fahrenheit or celsius)
          These components also take a function called 'onTemperatureChange'. When 'onTemperatureChange'
          is called in the child component, then the function 'updateTemperature' gets called in the
          parent component. What we have done is lift the state to the common parents of two
          components that rely on each others state. This is a critical concept to understand. */}
        <TemperatureInput
          temperature={fahrenheit}
          temperatureUnit="fahrenheit"
          onTemperatureChange={
            (temperature, temperatureUnit) => updateTemperature(temperature, temperatureUnit)
          }
        />

        <TemperatureInput
          temperature={celsius}
          temperatureUnit="celsius"
          onTemperatureChange={
            (temperature, temperatureUnit) => updateTemperature(temperature, temperatureUnit)
          }
        />
      </Card>
    </div>
  );
}