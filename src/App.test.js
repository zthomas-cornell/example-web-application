/*
Author:      Zachary Thomas
Created:     5/14/2021
Modified:    5/14/2021

Copyright 2021 © Cornell Pump Company, All Rights Reserved
-----------------------------------------------------------------
*/

import React from "react";
import { shallow } from "enzyme";
import App from "./App";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useLocation: () => ({
    pathname: "localhost:3000/"
  })
}));

it("Component renders without crashing", () => {
  shallow(<App />);
});

it("Should render navbar and footer", () => {
  const wrapper = shallow(<App />);
  const navbar = wrapper.find(Navbar);
  const footer = wrapper.find(Footer);
  expect(navbar.exists()).toBe(true);
  expect(footer.exists()).toBe(true);
});