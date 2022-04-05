/*
Author:      Zachary Thomas
Created:     8/6/2021
Modified:    8/19/2021

Copyright 2021 © Cornell Pump Company, All Rights Reserved
-----------------------------------------------------------------
*/

// Creates a deep copy of an object or array (arrays are also objects in JS).
export default function deepCopy(object) {
  return JSON.parse(JSON.stringify(object));
}