/*
Author:      Zachary Thomas
Created:     8/24/2021
Modified:    2/23/2022

Copyright 2021 - 2022 © Cornell Pump Company, All Rights Reserved
-----------------------------------------------------------------
*/

// Makes a request to an API.
export default async function apiRequest(url, method, body, authorization) {
  let response = null;
  let responseBody = null;

  try {
    // Check if there is a body object to send.
    if (body) {
      // Omit the request body log if it contains sensitive information.
      if ("password" in body
        || "currentPassword" in body
        || "newPassword" in body
      ) {
        console.log(`Request: ${method} ${url}`, "[Body omitted to hide sensitive information]");
      } else {
        console.log(`Request: ${method} ${url}`, body);
      }

      response = await fetch(url, {
        method: method,
        body: JSON.stringify(body),
        headers: {
          "Content-Type": "application/json",
          Authorization: authorization
        }
      });

    } else {
      // Don't include the body if there is no valid body to send.
      console.log(`Request: ${method} ${url}`);
      response = await fetch(url, {
        method: method,
        headers: {
          "Content-Type": "application/json",
          Authorization: authorization
        }
      });
    }

    console.log(`Response:`, response);
    responseBody = await getResponseBody(response);
    console.log("Response Body:", responseBody);

    // Check if the response was a 401 status code.
    // If it was then we will redirect to the login page.
    if (response && response.status === 401) {
      console.log("An unauthorized request was made. Returning to login page.");
      localStorage.setItem("authorization", "");
      window.location = "/login";
    }

  } catch (e) {
    // If an error occurs while attempting to make a request,
    // create a generic 500 internal server error and log the error.
    console.error(e);
    response = { ok: false, status: 500 };
  }

  return [response, responseBody];
}

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