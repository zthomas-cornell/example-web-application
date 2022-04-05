/*
Author:      Zachary Thomas
Created:     8/15/2021
Modified:    10/28/2021

Copyright 2021 © Cornell Pump Company, All Rights Reserved
-----------------------------------------------------------------
*/

import { useEffect } from "react";
import { useHistory } from "react-router-dom";

// Hook for making an API call.
export default function useApi(openingFunction, apiRequest, closingFunction, dependencies) {
  const history = useHistory();

  useEffect(() => {
    let ignore = false;
    const controller = new AbortController();

    // Attempt to get the response body.
    async function getResponseBody(response) {
      const json = await response.text();
      try {
        const object = JSON.parse(json);
        return object;
      } catch (e) {
        return null;
      }
    }

    // Make API call.
    async function callApi(apiRequest) {
      // Function to call before API call.
      // Only continue if the function returns true.
      let proceed = false;
      if (!ignore) {
        proceed = await openingFunction();
      }

      if (!proceed) {
        return;
      }

      // Perform API call.
      // Takes 'method', 'url', 'body', and 'authorization'.
      let response = null;
      let responseBody = null;
      try {
        if (!ignore) {
          if (!apiRequest.method) {
            throw "apiRequest must have a method";
          } else if (!apiRequest.url) {
            throw "apiRequest must have a url";
          }

          let authorizationToken = "";
          if (apiRequest.authorization) {
            authorizationToken = apiRequest.authorization;
          }

          // Check if there is a body object to send.
          if (apiRequest.body) {
            // Omit the request body log if it contains sensitive information.
            if ("password" in apiRequest.body
              || "currentPassword" in apiRequest.body
              || "newPassword" in apiRequest.body
            ) {
              console.log(`Request: ${apiRequest.method} ${apiRequest.url}`, "[Body omitted to hide sensitive information]");
            } else {
              console.log(`Request: ${apiRequest.method} ${apiRequest.url}`, apiRequest.body);
            }

            response = await fetch(apiRequest.url, {
              signal: controller.signal,
              method: apiRequest.method,
              body: JSON.stringify(apiRequest.body),
              headers: {
                "Content-Type": "application/json",
                Authorization: authorizationToken
              }
            });

          } else {
            // Don't include the body if there is no valid body to send.
            console.log(`Request: ${apiRequest.method} ${apiRequest.url}`);
            response = await fetch(apiRequest.url, {
              signal: controller.signal,
              method: apiRequest.method,
              headers: {
                "Content-Type": "application/json",
                Authorization: authorizationToken
              }
            });
          }

          console.log(`Response:`, response);
          responseBody = await getResponseBody(response);
          console.log("Response Body:", responseBody);
        }
      } catch (e) {
        if (e instanceof DOMException) {
          console.log("Response: HTTP request aborted.");
        } else {
          console.error(e);
          response = {
            ok: false,
            status: 500,
            error: "Internal server error. Please try again later."
          };
        }
      }

      // Check if the response was a 401 status code.
      // If it was then we will redirect to the login page.
      if (response && response.status === 401) {
        console.log("An unauthorized request was made. Returning to login page.");
        localStorage.setItem("authorization", "");
        history.push("/login");

      } else {
        // Function to call after API call.
        if (!ignore) {
          closingFunction(response, responseBody);
        }
      }
    }

    callApi(apiRequest);

    return () => {
      ignore = true;
      controller.abort();
    };
  }, [...dependencies]);
}