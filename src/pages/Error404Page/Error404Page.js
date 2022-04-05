/*
Author:      Zachary Thomas
Created:     5/14/2021
Modified:    8/26/2021

Copyright 2021 © Cornell Pump Company, All Rights Reserved
-----------------------------------------------------------------
*/

import React from "react";
import Card from "../../components/Card/Card";
import TextBlurb from "../../components/TextBlurb/TextBlurb";
import "./Error404Page.scss";

// Page for displaying 404 errors.
export default function Error404Page() {
  return (
    <div className="page-404 pt-5 mb-4">
      <Card title="Page Not Found">
        <div className="my-5">
          <TextBlurb
            title="404"
            paragraph="Sorry! The page you are looking for was not found."
            icon="exclamation-triangle"
          />
        </div>
      </Card>
    </div>
  );
}