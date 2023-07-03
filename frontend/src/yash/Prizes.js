import React, { useState } from "react";
import "./Prizes.css";

const prizes = [
  {
    id: 1,
    name: "Fitness Band",
    image: "fitness-band.jpg",
  },
  {
    id: 2,
    name: "Fitness Watch",
    image: "fitness-watch.jpg",
  },
  {
    id: 3,
    name: "Nike Shirt",
    image: "nike-shirt.jpg",
  },
  {
    id: 4,
    name: "Campus Running Shoes",
    image: "running-shoes.jpg",
  },
  // Add more prizes as needed
];

const Prizes = () => {
  const [targetAchieved, setTargetAchieved] = useState(false);

  const handleAchievement = () => {
    setTargetAchieved(true);
  };

  return (
    <div className="prizes-container">
      <h2>Exclusive Prizes</h2>
      {!targetAchieved ? (
        <button className="achieve-button" onClick={handleAchievement}>
          Achieve Target
        </button>
      ) : (
        <div className="prizes-list">
          {prizes.map((prize) => (
            <div className="prize" key={prize.id}>
              <img src={prize.image} alt={prize.name} className="prize-image" />
              <p className="prize-name">{prize.name}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Prizes;
