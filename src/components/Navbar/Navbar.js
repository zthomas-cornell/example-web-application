/*
Author:      Zachary Thomas
Created:     5/14/2021
Modified:    1/12/2022

Copyright 2021 - 2022 © Cornell Pump Company, All Rights Reserved
-----------------------------------------------------------------
*/

import React, { Fragment } from "react";
import PropTypes from "prop-types";
import NavbarLink from "./NavbarLink/NavbarLink";
import { Link } from "react-router-dom";
import SignOutButton from "./SignOutButton/SignOutButton";
import "./Navbar.scss";

// General navbar.
export default function Navbar(props) {

  return (
    <nav className="navbar navbar-expand navbar-custom px-3">
      <Link className="navbar-brand" to={props.currentPage === "/login" ? "/login" : "/"}>
        {props.title}
      </Link>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        {props.currentPage !== "/login" && (
          <Fragment>
            <ul className="navbar-nav me-auto">
              <NavbarLink name="Rendering #1" targetPage="/basic-rendering-1" currentPage={props.currentPage} />
              <NavbarLink name="Rendering #2" targetPage="/basic-rendering-2" currentPage={props.currentPage} />
              <NavbarLink name="UseEffect" targetPage="/use-effect" currentPage={props.currentPage} />
              <NavbarLink name="Lifting State Up" targetPage="/lifting-state-up" currentPage={props.currentPage} />
              <NavbarLink name="API" targetPage="/api" currentPage={props.currentPage} />
              <NavbarLink name="CRUD" targetPage="/basic-crud" currentPage={props.currentPage} />
              <NavbarLink name="Context" targetPage="/context" currentPage={props.currentPage} />
              <NavbarLink name="Tic-Tac-Toe Start" targetPage="/tic-tac-toe-start" currentPage={props.currentPage} />
              <NavbarLink name="Tic-Tac-Toe Finished" targetPage="/tic-tac-toe-finished" currentPage={props.currentPage} />
            </ul>

            <div className="mx-2">
              <SignOutButton />
            </div>
          </Fragment>
        )}
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  currentPage: PropTypes.string.isRequired
};