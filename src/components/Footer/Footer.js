/*
Author:      Zachary Thomas
Created:     5/14/2021
Modified:    12/14/2021

Copyright 2021 © Cornell Pump Company, All Rights Reserved
-----------------------------------------------------------------
*/

import React from "react";
import "./Footer.scss";

// General footer.
export default function Footer() {
  const date = new Date();

  return (
    <footer className="general-footer py-1 px-3">
      &#xA9; {date.getYear() + 1900}, Cornell Pump Company. All rights reserved.
    </footer>
  );
}