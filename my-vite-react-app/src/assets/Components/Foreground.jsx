import React, { useRef, useState } from "react";
import Card from "./Card";

const Foreground = () => {
  const containerRef = useRef(null);
  const [cards, setCards] = useState([1]);

  // Function to add a new card
  const addCard = () => {
    if (cards.length <= 5) {
      setCards([...cards, cards.length + 1]);
    }
  };

  // Function to remove a card
  const removeCard = (id) => {
    setCards(cards.filter((card) => card !== id));
  };

  return (
    <div className="flex" style={{ height: "100vh", width: "100%" }}>
     
      {/* Main Content */}
      <div className="flex-1 relative">
        <div
          ref={containerRef}
          className="relative p-8"
          style={{ position: "relative", height: "100%", width: "100%" }}
        >
          {/* Render all cards dynamically */}
          {cards.map((item) => (
            <Card
              key={item}
              id={item}
              onClose={() => removeCard(item)}
              containerRef={containerRef}
            />
          ))}

          {/* Button to add a new card */}
          <div className="absolute bottom-8 right-8 text-4xl font-bold">
            <button
              onClick={addCard}
              className="bg-yellow-400 px-8 py-6 rounded-md hover:scale-110 transition-all hover:border-2"
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Foreground;