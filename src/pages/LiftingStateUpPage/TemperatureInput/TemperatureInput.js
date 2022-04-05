/*
Author:      Zachary Thomas
Created:     9/5/2021
Modified:    9/6/2021

Copyright 2021 © Cornell Pump Company, All Rights Reserved
-----------------------------------------------------------------
*/

import React from "react";
import PropTypes from "prop-types";
import "./TemperatureInput.scss";

// Input for setting temperature.
export default function TemperatureInput(props) {
  return (
    <div className="temp-input m-4">
      <label className="font-weight-bold">
        {props.temperatureUnit.toUpperCase()}
      </label>

      {/* This is known as a controlled component. We have an input that displays
        the current temperature value that is passed to it, and when the input is
        changed we pass that new value up to the parent so that it can update the
        current temperature and pass it back down to be displayed */}
      <div className="input-group">
        <input
          className="form-control"
          type="number"
          value={props.temperature}
          onChange={
            (e) => props.onTemperatureChange(e.target.value, props.temperatureUnit)
          }
        />
      </div>
    </div>
  );
}

TemperatureInput.propTypes = {
  temperature: PropTypes.string.isRequired,
  temperatureUnit: PropTypes.oneOf(["fahrenheit", "celsius"]).isRequired,
  onTemperatureChange: PropTypes.func.isRequired
};