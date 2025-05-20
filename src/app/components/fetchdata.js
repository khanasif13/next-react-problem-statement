"use client";
import React, { useEffect, useState } from "react";

const FetchData = () => {
    const [postsData,setPostsData] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const url = 'https://jsonplaceholder.typicode.com/posts';
    
    useEffect(() => {
        fetchdata();
    },[]);

    const fetchdata = async() => {
       try{
            const response = await fetch(url);
            const responseJson = await response?.json();
            setPostsData(responseJson);
       } catch(err){
            console.log(err);
       }
    }

    const fetchPreviousRecord = () => {
        setCurrentIndex(prev => prev - 10);
    }

    const fetchNextRecord = () => {
        setCurrentIndex(prev => prev + 10);
    }

    const sortDataInAscendingOrder = () => {
        setPostsData(prevData => 
            [...prevData].sort((a,b) => a.title.localeCompare(b.title))
        );
    }

      const sortDataInDescendingOrder = () => {
        setPostsData(prevData => 
            [...prevData].sort((a,b) => b.title.localeCompare(a.title))
        );
    }

    return (      
        <>
            <div className="p-6 max-w-4xl mx-auto">
                <ul className="space-y-2 mb-6">
                    {postsData
                    ?.slice(currentIndex, currentIndex + 10)
                    .map((post, index) => (
                        <li
                        key={index}
                        className="bg-white p-4 rounded shadow hover:bg-gray-100 transition"
                        >
                        {post?.title}
                        </li>
                    ))}
                </ul>

                <div className="flex gap-4 mb-4">
                    <button
                    onClick={fetchPreviousRecord}
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
                    >
                    Previous
                    </button>
                    <button
                    onClick={fetchNextRecord}
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
                    >
                    Next
                    </button>
                </div>

                <div className="flex gap-4">
                    <button
                    onClick={sortDataInAscendingOrder}
                    className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
                    >
                    Sort Ascending
                    </button>
                    <button
                    onClick={sortDataInDescendingOrder}
                    className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
                    >
                    Sort Descending
                    </button>
                </div>
            </div>
        </>  
    )
}

export default FetchData;