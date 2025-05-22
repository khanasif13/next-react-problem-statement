"use client";
import { useEffect, useState } from "react";

const DebounceSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [debounceSearchTerm, setDebounceSearchTerm] = useState(searchTerm);
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebounceSearchTerm(searchTerm);
    }, 500);
    return () => clearTimeout(handler);
  }, [searchTerm]);

  useEffect(() => {
    if (!debounceSearchTerm) {
      setSearchResult([]);
      return;
    }
    fetchResult(debounceSearchTerm);
  }, [debounceSearchTerm]);

  console.log(searchResult);

  const fetchResult = async (debounceSearchTerm) => {
    const url = `https://api.duckduckgo.com/?q=${debounceSearchTerm}&format=json`;

    try {
      const response = await fetch(url);
      const responseJSON = await response.json();
      console.log(responseJSON);
      // setSearchResult(responseJSON);
      // console.log(searchResult?.RelatedTopics?.map());
      setSearchResult(
        responseJSON.RelatedTopics.map(
          (item) => item.Text || item.Topics?.[0]?.Text || "No title"
        )
      );
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="max-w-xl mx-auto p-4 space-y-4">
      <h2 className="text-xl font-semibold flex items-center gap-2">
        ⚡ What is Debouncing?
      </h2>
      <p className="text-gray-700">
        Debouncing is a programming pattern that delays the execution of a
        function until a certain amount of time has passed since the last time
        the function was invoked.
      </p>
      <p className="text-gray-700">In the case of a search input, it means:</p>
      <p className="text-gray-700">
        Wait for the user to stop typing for a bit (e.g., 500ms). Then send the
        API request.
      </p>

      <div>
        <input
          type="text"
          placeholder="Type a Search Keyword"
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <ul className="list-disc list-inside text-gray-800 space-y-1">
        {searchResult?.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default DebounceSearch;
