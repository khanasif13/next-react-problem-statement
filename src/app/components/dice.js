"use client";
import React, { useState } from "react";

const Dice = () => {
  const [roll1, setPlayer1Score] = useState(0);
  const [roll2, setPlayer2Score] = useState(0);
  const [matchResult, setMatchResult] = useState("");

  const diceAgain = () => {
    console.log("Inside diceAgain Function:");
    const player1Score = Math.floor(Math.random() * 6 + 1);
    const player2Score = Math.floor(Math.random() * 6 + 1);
    setPlayer1Score(player1Score);
    setPlayer2Score(player2Score);
    if (player1Score > player2Score) {
      setMatchResult("Player 1 is the Winner");
    } else if (player2Score > player1Score) {
      setMatchResult("Player 2 is the Winner");
    } else {
      setMatchResult("Match is Draw");
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6 space-y-6 bg-white rounded-xl shadow-md">
      <h2 className="text-2xl font-bold text-gray-800 border-b pb-2">
        🎲 Roll a Dice Game
      </h2>

      <div className="space-y-2">
        <p className="text-gray-700">
          <span className="font-semibold">Problem Statement:</span> A simple
          dice game where two players roll a 6-sided dice. The player with the
          higher number wins!
        </p>

        <div>
          <p className="text-gray-800 font-medium">✅ Features:</p>
          <ul className="list-disc list-inside text-gray-600 ml-2 space-y-1">
            <li>Simulates rolling a 6-sided dice</li>
            <li>Declares a winner or a draw</li>
            <li>Button to play again</li>
          </ul>
        </div>
      </div>

      <div className="flex justify-between items-center text-lg font-medium text-gray-800 bg-gray-50 p-4 rounded-md border">
        <div>
          <p>🎯 Player 1 Number:</p>
          <span className="text-2xl font-bold text-blue-600">{roll1}</span>
        </div>
        <div>
          <p>🎯 Player 2 Number:</p>
          <span className="text-2xl font-bold text-purple-600">{roll2}</span>
        </div>
      </div>

      <p className="text-center text-xl font-semibold text-green-600">
        {matchResult}
      </p>

      <div className="flex justify-center">
        <button
          className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 transition duration-200"
          onClick={diceAgain}
        >
          🔄 Play Again
        </button>
      </div>
    </div>
  );
};

export default Dice;
