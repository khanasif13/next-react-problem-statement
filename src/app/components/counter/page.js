"use client";
import React, { useEffect, useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0);

    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">
                Counter: {count}
            </h1>
            <div className="flex gap-4">
                <button
                    onClick={increment}
                    className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-200"
                >
                    Increment
                </button>
                <button
                    onClick={decrement}
                    className="px-6 py-2 bg-red-600 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 transition duration-200"
                >
                    Decrement
                </button>
            </div>
        </div>
    );
};

export default Counter;
