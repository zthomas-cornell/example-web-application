/*
Author:      Zachary Thomas
Created:     9/1/2021
Modified:    1/6/2022

Copyright 2021 - 2022 © Cornell Pump Company, All Rights Reserved
-----------------------------------------------------------------
*/

// Constants that are referenced throughout the application.
module.exports = Object.freeze({
  USER_POOL: {
    UserPoolId: "us-west-2_Kaqr4pUtc",
    ClientId: "3h2rt1adfd9gidtrf1a1oj3qi0"
  },
  API: "https://swapi.dev/api",
  MIN_NOTE_TITLE_LENGTH: 1,
  MAX_NOTE_TITLE_LENGTH: 100,
  MIN_NOTE_DESCRIPTION_LENGTH: 0,
  MAX_NOTE_DESCRIPTION_LENGTH: 3000,
  MS_PER_SECOND: 1000,
  MS_PER_MINUTE: 60 * 1000,
  MS_PER_HOUR: 60 * 60 * 1000,
  MS_PER_DAY: 24 * 60 * 60 * 1000,
  MS_PER_MONTH: 30 * 24 * 60 * 60 * 1000,
  MS_PER_YEAR: 365 * 24 * 60 * 60 * 1000,
  ALPHABET: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L",
    "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"
  ]
});