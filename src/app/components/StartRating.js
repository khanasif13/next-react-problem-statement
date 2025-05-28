"use client";
import React, { useState } from "react";

const StarRating = () => {
    const [rating,setRating] = useState(0);
    return (
        <>
            <div className="flex gap-4">
                {[1,2,3,4,5]?.map((star,index) => (
                    <span className={star <= rating ? "star gold" : "star gray" } onClick={() => setRating(star)} key={index}>&#9733; </span>
                ))}            
            </div> 
            <div>
                Current Rating: {rating}
            </div>
            <button className="px-4 py-2 rounded-md text-white bg-blue-500 hover:bg-blue-600" onClick={() => setRating(0)}> Reset Rating </button>
        </>
                  
    );    
}

export default StarRating;