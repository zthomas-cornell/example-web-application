/*
Author:      Zachary Thomas
Created:     6/8/2021
Modified:    10/22/2021

Copyright 2021 © Cornell Pump Company, All Rights Reserved
-----------------------------------------------------------------
*/

import React, { useState } from "react";
import PageTitle from "../../components/PageTitle/PageTitle";
import LoginForm from "./LoginForm/LoginForm";
import { useHistory } from "react-router-dom";
import { USER_POOL } from "../../utilities/constants";
import { CognitoUser, CognitoUserPool, AuthenticationDetails } from "amazon-cognito-identity-js";
import "./LoginPage.scss";

// Page for users to login to their account.
export default function LoginPage() {
  const [error, setError] = useState("");
  const history = useHistory();
  const userPool = new CognitoUserPool(USER_POOL);

  // Attempts to login a user using the Cognito API.
  async function submit(email, password) {
    if (!email.length) {
      setError("Please enter an email.");
    } else if (!password.length) {
      setError("Please enter a password.");
    } else {

      const user = new CognitoUser({
        Username: email,
        Pool: userPool
      });

      const authDetails = new AuthenticationDetails({
        Username: email,
        Password: password
      });

      user.authenticateUser(authDetails, {
        onSuccess: data => {
          const token = data.getIdToken().getJwtToken();
          localStorage.setItem("idToken", token);
          history.push("/");
        },
        onFailure: err => {
          console.error("onFailure:", err);
          setError(err.message);
        },
        newPasswordRequired: data => {
          console.error("newPasswordRequired:", data);
        }
      });
    }
  }

  // Skip the login form and pretend that we logged in.
  function skip() {
    localStorage.setItem("idToken", "FAKE");
    history.push("/");
  }

  return (
    <div className="page-login mb-4">
      <PageTitle title={`User Login`} />

      <LoginForm
        errorMessage={error}
        onSubmit={(email, password) => submit(email, password)}
        onSkip={() => skip()}
      />
    </div>
  );
}