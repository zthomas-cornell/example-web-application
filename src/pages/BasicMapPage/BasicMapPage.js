/*
Author:      Zachary Thomas
Created:     10/22/2021
Modified:    10/22/2021

Copyright 2021 © Cornell Pump Company, All Rights Reserved
-----------------------------------------------------------------
*/

import React, { Fragment, useState } from "react";
import Card from "../../components/Card/Card";
import PageTitle from "../../components/PageTitle/PageTitle";
import { ALPHABET } from "../../utilities/constants";
import "./BasicMapPage.scss";

// Example page showing some simple concepts.
export default function BasicMapPage() {
  const [alphabetIndex, setAlphabetIndex] = useState(0);

  // Everything inside the return is the JSX that we render.
  // Please only keep JSX here. Avoid passing JSX around outside of the return.
  return (
    <div className="page-basic-map mb-4">
      {/* Simple page title. */}
      <PageTitle title="Basic Rendering #1" />

      {/* Container with a header bar and a title. */}
      <Card title="Alphabet">
        <div className="letter-container text-center mx-auto my-4">

          {/* Buttons that adds a new letter. Don't show the button if we have all the letters. */}
          {alphabetIndex < ALPHABET.length && (
            <button
              type="button"
              className="btn btn-success my-4"
              onClick={() => setAlphabetIndex(prevIndex => prevIndex + 1)}
            >
              Add Letter
            </button>
          )}

          {/* Here we will render all of the alphabet letters we have so far */}
          <div>
            {ALPHABET.map((letter, i) =>
              <Fragment key={i}>
                {alphabetIndex > i && (
                  <div className="alphabet-letter">{ALPHABET[i]}</div>
                )}
              </Fragment>
            )}
          </div>
        </div>
      </Card>
    </div>
  );
}