"use client";
import React, { useEffect, useState } from 'react';

const Stopwatch = () => {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  let interval;

  useEffect(() => {
    if (isRunning) {
      interval = setInterval(() => {
        setSeconds(prev => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  const startTimer = () => {
    setIsRunning(true);
  }

  const stopTimer = () => {
    setIsRunning(false);
  }

  const resetTimer = () => {
    stopTimer();
    setSeconds(0);
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Time: {seconds}s</h1>
      <div className="flex gap-4">
        <button
          onClick={startTimer}
          className="px-6 py-2 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 transition duration-200"
        >
          Start
        </button>
        <button
          onClick={stopTimer}
          className="px-6 py-2 bg-yellow-500 text-white font-semibold rounded-lg shadow-md hover:bg-yellow-600 transition duration-200"
        >
          Stop
        </button>
        <button
          onClick={resetTimer}
          className="px-6 py-2 bg-red-600 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 transition duration-200"
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default Stopwatch;
