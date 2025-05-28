import Carousel from "@/app/components/carousel";
import React from "react";

const cards = [
    { title: "Card 1", description: "Description for Card 1" },
    { title: "Card 2", description: "Description for Card 2" },
    { title: "Card 3", description: "Description for Card 3" },
  ];

const CarouselDemo = () => {
    return(
        <Carousel cards={cards} />
    );    
}

export default CarouselDemo;