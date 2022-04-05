/*
Author:      Zachary Thomas
Created:     9/1/2021
Modified:    9/2/2021

Copyright 2021 © Cornell Pump Company, All Rights Reserved
-----------------------------------------------------------------
*/

import React, { useState } from "react";
import { API } from "../../utilities/constants";
import useApi from "../../hooks/useApi";
import Card from "../../components/Card/Card";
import Spinner from "../../components/Spinner/Spinner";
import Error from "../../components/Error/Error";
import PageTitle from "../../components/PageTitle/PageTitle";
import "./ApiPage.scss";

// Example API page.
export default function ApiPage() {
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [starWarsCharacter, setStarWarsCharacter] = useState("");
  const [counter, setCounter] = useState(1);

  // This is a custom API hook that takes an opening function,
  // an object that describes the API call, a closing function, and a dependency array.
  useApi(
    () => {
      setLoading(true);
      // The opening function will only continue to the API call if we return true.
      // This allows us to perform a check to validate form data or whatever else we
      // want to do before calling the API.
      return true;
    },
    {
      method: "GET",
      url: `${API}/people/${counter}`,
      authorization: localStorage.getItem("idToken")
    },
    async (response, responseBody) => {
      // If the API response is a 2xx status, then we can perform whatever action we want.
      if (response.ok && responseBody) {
        setStarWarsCharacter(responseBody.name);
        setErrorMessage("");
      } else {
        // If the API did not give a 2xx status code response,
        // then we can decide how we want to deal with errors.
        // In this example we simply show an error message when
        // we get any type of error.
        setErrorMessage("There was an internal server error. Please try again.");
      }
      setLoading(false);
    },
    [counter]
  );

  // Everything inside the return is the JSX that we render.
  // Please only keep JSX here. Avoid passing JSX around outside of the return.
  return (
    <div className="page-api mb-4">
      {/* Spinner that shows when API data is loading. */}
      <Spinner loading={loading} />

      {/* Simple page title. */}
      <PageTitle title="Getting API Data" />

      {/* Container with a header bar and a title. */}
      <Card title="Star Wars Character">
        <div className="character-container text-center mx-auto my-4">
          {/* Message that updates in response to our API calls. */}
          <p className="h5">
            My favorite Star Wars character is: <u>{starWarsCharacter}</u>
          </p>

          {/* Pressing this button increments our counter.
              Notice that the API dependency array uses this counter
              to decide when to make a new call. */}
          <button
            type="button"
            className="btn btn-success my-4"
            onClick={() => setCounter((prevCount) => prevCount + 1)}
          >
            Try Again
          </button>

          <div className="mx-4">
            <Error message={errorMessage} />
          </div>
        </div>
      </Card>
    </div>
  );
}