/*
Author:      Zachary Thomas
Created:     10/22/2021
Modified:    1/12/2022

Copyright 2021 - 2022 © Cornell Pump Company, All Rights Reserved
-----------------------------------------------------------------
*/

import React, { useEffect, Fragment } from "react";
import { Route, Switch, Redirect, useLocation, useHistory } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import LoginPage from "./pages/LoginPage/LoginPage";
import ApiPage from "./pages/ApiPage/ApiPage";
import BasicRenderingPage from "./pages/BasicRenderingPage/BasicRenderingPage";
import LiftingStateUpPage from "./pages/LiftingStateUpPage/LiftingStateUpPage";
import TicTacToeStartPage from "./pages/TicTacToeStartPage/TicTacToeStartPage";
import TicTacToeFinishPage from "./pages/TicTacToeFinishPage/TicTacToeFinishPage";
import BasicCrudPage from "./pages/BasicCrudPage/BasicCrudPage";
import ContextPage from "./pages/ContextPage/ContextPage";
import Error404Page from "./pages/Error404Page/Error404Page";
import Error500Page from "./pages/Error500Page/Error500Page";
import BasicMapPage from "./pages/BasicMapPage/BasicMapPage";
import UseEffectPage from "./pages/UseEffectPage/UseEffectPage";
import "./App.css";

// Handles page routing and getting theme data.
export default function App() {
  const currentPage = useLocation().pathname;
  const history = useHistory();

  // If the user is not logged in, bring them to the login page.
  useEffect(() => {
    const idToken = localStorage.getItem("idToken");
    if (!idToken || idToken.length === 0) {
      history.push("/login");
    }
  }, []);

  return (
    <Fragment>
      <Navbar title={"Example"} currentPage={currentPage} />

      <main>
        <div className="app container">
          <Switch>

            <Route exact path="/">
              <Redirect to="/basic-rendering-1" />
            </Route>

            <Route path="/basic-rendering-1">
              <BasicMapPage />
            </Route>

            <Route path="/basic-rendering-2">
              <BasicRenderingPage />
            </Route>

            <Route path="/use-effect">
              <UseEffectPage />
            </Route>

            <Route path="/context">
              <ContextPage />
            </Route>

            <Route path="/lifting-state-up">
              <LiftingStateUpPage />
            </Route>

            <Route path="/tic-tac-toe-start">
              <TicTacToeStartPage />
            </Route>

            <Route path="/tic-tac-toe-finished">
              <TicTacToeFinishPage />
            </Route>

            <Route path="/basic-crud">
              <BasicCrudPage />
            </Route>

            <Route path="/api">
              <ApiPage />
            </Route>

            <Route path="/login">
              <LoginPage />
            </Route>

            <Route path="/error-500">
              <Error500Page />
            </Route>

            <Route path="*">
              <Error404Page />
            </Route>
          </Switch>
        </div>
      </main>

      <Footer />
    </Fragment>
  );
}
