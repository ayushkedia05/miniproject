import React, { useState } from 'react';
import './App.css';

const getRandomCalories = () => {
  return Math.floor(Math.random() * 201) + 50; // Generates a random number between 50 and 250 (inclusive)
};

const DailyPlan = () => {
  const [foodItem, setFoodItem] = useState('');
  const [totalCalories, setTotalCalories] = useState(0);
  const maximumCalories = 2000; // Maximum calories value of the day

  const handleFoodItemChange = (e) => {
    setFoodItem(e.target.value);
  };

  const handleAddFood = () => {
    const calories = getRandomCalories();
    const newTotalCalories = totalCalories + calories;
    if (newTotalCalories > maximumCalories) {
      alert('Do not eat it! Your daily diet plan will be failed.');
    } else {
      setTotalCalories(newTotalCalories);
      setFoodItem('');
    }
  };

  return (
    <div className="App">
      <h1>Food Diary</h1>
      <div className="inputContainer">
        <label htmlFor="foodItem">Food Item:</label>
        <input
          id="foodItem"
          type="text"
          value={foodItem}
          onChange={handleFoodItemChange}
        />
        <button onClick={handleAddFood}>Add Food</button>
      </div>
      <div className="messageContainer">
        {totalCalories > maximumCalories ? (
          <p className="errorMessage">
            Do not eat it! Your daily diet plan will be failed.
          </p>
        ) : (
          <p className="successMessage">You can eat! You are safe.</p>
        )}
      </div>
    </div>
  );
};

export default DailyPlan;
