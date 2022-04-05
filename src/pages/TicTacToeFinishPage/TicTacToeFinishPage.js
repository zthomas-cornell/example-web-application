/*
Author:      Zachary Thomas
Created:     10/22/2021
Modified:    10/22/2021

Copyright 2021 © Cornell Pump Company, All Rights Reserved
-----------------------------------------------------------------
*/

import React from "react";
import Board from "./Board/Board";
import "./TicTacToeFinishPage.scss";

// The starting page of the Tic Tac Toe tutorial.
export default function TicTacToeFinishPage() {
  return (
    <div className="game">
      <div className="game-board my-5 mx-auto">
        <Board />
      </div>
      <div className="game-info">
        <div>{/* status */}</div>
        <ol>{/* TODO */}</ol>
      </div>
    </div>
  );
}