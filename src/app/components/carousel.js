"use client";
import React, { useState } from 'react';

function Carousel({ cards }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    cards?.length > 0 ? (
      <div className="w-full max-w-md mx-auto p-4 bg-white rounded-xl shadow-md space-y-4">
        {cards?.slice(currentIndex, currentIndex + 1)?.map?.((item, index) => (
          <div key={index} className="p-4 border border-gray-200 rounded-lg bg-gray-50">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{item?.title}</h3>
            <p className="text-gray-600">{item?.description}</p>
          </div>
        ))}

        <div className="flex items-center justify-between mt-4 gap-x-12">
          <button
            disabled={currentIndex < 1}
            onClick={() => setCurrentIndex(currentIndex => currentIndex - 1)}
            className={`px-4 py-2 rounded-md text-white ${
              currentIndex < 1 ? 'bg-gray-300 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600'
            }`}
          >
            Previous
          </button>

          <span className="text- text-gray-700">
            {currentIndex + 1} of {cards?.length}
          </span>

          <button
            disabled={(currentIndex + 1) === cards?.length}
            onClick={() => setCurrentIndex(currentIndex => currentIndex + 1)}
            className={`px-4 py-2 rounded-md text-white ${
              (currentIndex + 1) === cards?.length ? 'bg-gray-300 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600'
            }`}
          >
            Next
          </button>
        </div>
      </div>
    ) : (
      <h2 className="text-center text-lg text-red-500 font-medium mt-4">No cards available</h2>
    )
  );
}

export default Carousel;
