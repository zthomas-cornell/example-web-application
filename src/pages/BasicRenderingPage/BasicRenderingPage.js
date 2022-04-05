/*
Author:      Zachary Thomas
Created:     9/2/2021
Modified:    9/2/2021

Copyright 2021 © Cornell Pump Company, All Rights Reserved
-----------------------------------------------------------------
*/

import React, { Fragment, useState } from "react";
import Card from "../../components/Card/Card";
import PageTitle from "../../components/PageTitle/PageTitle";
import "./BasicRenderingPage.scss";

// Example basic rendering page.
export default function BasicRenderingPage() {
  const [objects, setObjects] = useState([]);
  const [astronautCount, setAstronautCount] = useState(0);
  const [airplaneCount, setAirplaneCount] = useState(0);
  const [soccerBallCount, setSoccerBallCount] = useState(0);

  // This function will add an astronaut, airplane, or a soccer ball to the
  // list of objects that we are rendering.
  function addObject(type) {
    const objectsShallowCopy = objects;

    switch (type) {
      case "astronaut":
        objectsShallowCopy.push({ icon: "grav" });
        setAstronautCount(prevCount => prevCount + 1);
        break;
      case "airplane":
        objectsShallowCopy.push({ icon: "telegram" });
        setAirplaneCount(prevCount => prevCount + 1);
        break;
      case "ball":
        objectsShallowCopy.push({ icon: "soccer-ball-o" });
        setSoccerBallCount(prevCount => prevCount + 1);
    }

    setObjects(objectsShallowCopy);
  }

  // Everything inside the return is the JSX that we render.
  // Please only keep JSX here. Avoid passing JSX around outside of the return.
  return (
    <div className="page-basic-rendering mb-4">
      {/* Simple page title. */}
      <PageTitle title="Basic Rendering #2" />

      {/* Container with a header bar and a title. */}
      <Card title="Collection of Objects">
        <div className="character-container text-center mx-auto my-4">

          {/* Buttons that add new objects */}
          <div className="row">
            <div className="col-4 text-center">
              <button
                type="button"
                className="btn btn-success my-4"
                onClick={() => addObject("astronaut")}
              >
                Astronaut
              </button>
            </div>

            <div className="col-4 text-center">
              <button
                type="button"
                className="btn btn-success my-4"
                onClick={() => addObject("airplane")}
              >
                Paper Airplane
              </button>
            </div>

            <div className="col-4 text-center">
              <button
                type="button"
                className="btn btn-success my-4"
                onClick={() => addObject("ball")}
              >
                Soccer Ball
              </button>
            </div>
          </div>

          {/* Here we will render all of the objects we have created so far */}
          {objects.map((object, i) =>
            <i key={i} className={`fa fa-${object.icon} fa-2x mx-2`} />
          )}

          <h2>Count:</h2>

          <div className="my-4">
            {/* Here is an example of toggling between rendering two things. */}
            {astronautCount > airplaneCount ? (
              <Fragment>
                <i className="fa fa-grav fa-2x mx-2" />
                <span>{astronautCount}</span>
              </Fragment>
            ) : (
              <Fragment>
                <i className="fa fa-telegram fa-2x mx-2" />
                <span>{airplaneCount}</span>
              </Fragment>
            )}

            {/* Here is an example of conditionally rendering a single thing.
                NOTE: Whatever values you use here must be boolean, or else
                the value itself will be rendered. We are taking advantage of
                lazy evaluation in JavaScript to make this possible */}
            {soccerBallCount > astronautCount && soccerBallCount > airplaneCount && (
              <Fragment>
                <i className="fa fa-soccer-ball-o fa-2x mx-2" />
                <span>{soccerBallCount}</span>
              </Fragment>
            )}
          </div>
        </div>
      </Card>
    </div>
  );
}