/*
Author:      Zachary Thomas
Created:     8/23/2021
Modified:    8/26/2021

Copyright 2021 © Cornell Pump Company, All Rights Reserved
-----------------------------------------------------------------
*/

import React from "react";
import Card from "../../components/Card/Card";
import TextBlurb from "../../components/TextBlurb/TextBlurb";
import "./Error500Page.scss";

// Page for displaying 500 errors.
export default function Error500Page() {
  return (
    <div className="page-500 pt-5 mb-4">
      <Card title="Internal Server Error">
        <div className="my-5">
          <TextBlurb
            title="Something went wrong!"
            paragraph="We were unable to display the page you were looking for. Please go back to the previous page and try again."
            icon="exclamation-triangle"
          />
        </div>
      </Card>
    </div>
  );
}