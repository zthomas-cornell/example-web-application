/*
Author:      Zachary Thomas
Created:     6/8/2021
Modified:    6/8/2021

Copyright 2021 © Cornell Pump Company, All Rights Reserved
-----------------------------------------------------------------
*/

import React from "react";
import { useHistory } from "react-router-dom";
import "./SignOutButton.scss";

// A sign out button on the navbar.
export default function SignOutButton() {
  const history = useHistory();

  // Sign out the user and return to the login page.
  function signOut() {
    localStorage.setItem("idToken", "");
    history.push("/login");
  }

  return (
    <button
      type="button"
      className="sign-out-button btn btn-dark"
      onClick={() => signOut()}
    >
      Sign Out
    </button>
  );
}