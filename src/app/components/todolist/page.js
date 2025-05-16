"use client";
import React, { useRef, useState } from "react";

const Todolist = () => {
  const inputRef = useRef(null);
  const [items, setItems] = useState([]);

  const addToList = () => {
    const inputVal = inputRef?.current?.value;
    if (!inputVal) return;

    const newItem = {
      id: Date.now(),
      itemName: inputVal,
      completed: false,
    };
    setItems([...items, newItem]);
    inputRef.current.value = "";
  };

  const deleteItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const markComplete = (id) => {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, completed: true } : item
      )
    );
  };

  return (
    <div className="flex flex-col items-center justify-start min-h-screen bg-gray-100 p-6">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
        <div className="flex gap-4 mb-6">
          <input
            placeholder="Enter todo"
            name="listinput"
            ref={inputRef}
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={addToList}
            className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-200"
          >
            Add
          </button>
        </div>

        <ul className="space-y-4">
          {items.map((item) => (
            <li
              key={item.id}
              className="flex items-center justify-between gap-4 border-b pb-2"
            >
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  name="itemSelect"
                  checked={item.completed}
                  onChange={() => markComplete(item.id)}
                  className="w-5 h-5 text-blue-600"
                />
                <p
                  className={`text-lg ${
                    item.completed ? "line-through text-gray-500" : "text-gray-800"
                  }`}
                >
                  {item.itemName}
                </p>
              </div>
              <button
                onClick={() => deleteItem(item.id)}
                className="text-sm text-red-600 hover:underline"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Todolist;
