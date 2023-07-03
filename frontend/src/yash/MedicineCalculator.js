import React, { useState } from 'react';
import './MedicineCalculator.css';

const MedicineCalculator = () => {
  const [medicines, setMedicines] = useState([]);
  const [nearestMedicalStores, setNearestMedicalStores] = useState([]);
  const [medicineName, setMedicineName] = useState('');
  const [quantity, setQuantity] = useState('');

  const handleAddMedicine = () => {
    if (medicineName && quantity) {
      const newMedicine = {
        name: medicineName,
        quantity: parseInt(quantity),
      };
      setMedicines([...medicines, newMedicine]);
      setMedicineName('');
      setQuantity('');
    }
  };

  const handleCalculateTotalAmount = () => {
    let totalAmount = 0;
    medicines.forEach((medicine) => {
      const randomPrice = Math.floor(Math.random() * ( 10 + 1)) + 10; // Random value between 50 and 150
      totalAmount += medicine.quantity * randomPrice;
    });
    return totalAmount.toFixed(2);
  };

  const handleFindNearestMedicalStores = () => {
    const nearestStores = [
      { name: 'Yash Medicals', location: 'KSR Layout, Bangalore' },
      { name: 'Appolo Pharmacy', location: 'J.P Nagar, Bangalore' },
      { name: '24*7', location: 'K.R Market, Bangalore' },
      { name: 'Bangalore Medical', location: 'Majestic, Bangalore' },
      { name: 'Day-Night Medical', location: 'Jayanagar, Bangalore' },
      { name: 'Centre Medical', location: 'Chickpete, Bangalore' },
    ];
    setNearestMedicalStores(nearestStores);
  };

  const getRandomMedicalStores = (count) => {
    const shuffledStores = [...nearestMedicalStores].sort(() => 0.5 - Math.random());
    return shuffledStores.slice(0, count);
  };

  return (
    <div className="medicine-calculator-container">
      <h2>Medicine Calculator</h2>
      <div className="input-section">
        <div className="input-fields">
          <input
            type="text"
            placeholder="Enter medicine name"
            value={medicineName}
            onChange={(e) => setMedicineName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Enter quantity"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
        </div>
        <button className="add-button" onClick={handleAddMedicine}>
          Add Medicine
        </button>
      </div>
      <div className="medicine-list">
        {medicines.map((medicine, index) => (
          <div key={index} className="medicine-item">
            <span>{`Medicine: ${medicine.name}`}</span>
            <span>   </span>
            <span className='sm'>{`Quantity: ${medicine.quantity}`}</span>
          </div>
        ))}
      </div>
      <div className="total-amount">
        <span>Total Amount:</span>
        <span>{`Rs.${handleCalculateTotalAmount()}`}</span>
      </div>
      <button className="find-stores-button" onClick={handleFindNearestMedicalStores}>
        Find Nearest Medical Stores
      </button>
      <div className="nearest-stores-list">
        {nearestMedicalStores.length > 0 ? (
          <>
            <h3>Nearest Medical Stores:</h3>
            <ul>
              {getRandomMedicalStores(3).map((store, index) => (
                <li key={index}>
                  <span>{store.name}</span>
                  <span>{store.location}</span>
                </li>
              ))}
            </ul>
          </>
        ) : null}
      </div>
    </div>
  );
};

export default MedicineCalculator;
