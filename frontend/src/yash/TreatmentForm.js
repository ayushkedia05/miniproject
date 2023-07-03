import React, { useState } from 'react';
import styled from 'styled-components';

// Sample hospital data
const hospitals = [
  { name: 'Apollo Hospital', location: 'Jayanagar,Bangalore', treatments: ['Treatment 1', 'Treatment 2'] },
  { name: 'Aster CMI Hebbal', location: 'Hebbal', treatments: ['Treatment 2', 'Treatment 3'] },
  { name: 'BMC Hosital', location: 'K R Market,Bangalore', treatments: ['Treatment 1', 'Treatment 3'] },
  { name: 'Sagar Hospitals', location: 'KSR Layout,Bangalore', treatments: ['Treatment 1', 'Treatment 2'] },
  { name: 'Aster CMI Hebbal', location: 'City Y', treatments: ['Treatment 2', 'Treatment 3'] },
  { name: 'BMC Hosital', location: 'City Z', treatments: ['Treatment 1', 'Treatment 3'] },
  { name: 'Apollo Hospital,Jayanagar', location: 'City X', treatments: ['Treatment 1'] },
  { name: 'Aster CMI Hebbal', location: 'City Y', treatments: ['Treatment 2'] },
  { name: 'BMC Hosital', location: 'City Z', treatments: ['Treatment 1'] },
];

// Styled components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const Select = styled.select`
  padding: 10px;
  margin-bottom: 20px;
`;

const HospitalCard = styled.div`
  background-color: #f2f2f2;
  padding: 20px;
  border-radius: 4px;
  margin-bottom: 10px;
  width: 300px;
`;

const HospitalName = styled.h3`
  margin: 0;
`;

const HospitalLocation = styled.p`
  margin: 5px 0;
`;

const TreatmentForm = () => {
  const [selectedTreatment, setSelectedTreatment] = useState('');
  const [nearestHospitals, setNearestHospitals] = useState([]);

  const handleTreatmentChange = (e) => {
    setSelectedTreatment(e.target.value);
  };

  const findNearestHospitals = () => {
    const filteredHospitals = hospitals.filter(hospital =>
      hospital.treatments.includes(selectedTreatment)
    );
    setNearestHospitals(filteredHospitals);
  };

  return (
    <Container>
      <h2>Find Nearest Hospital</h2>
      <Select value={selectedTreatment} onChange={handleTreatmentChange}>
        <option value="">Select Treatment</option>
        <option value="Treatment 1">Treatment 1</option>
        <option value="Treatment 2">Treatment 2</option>
        <option value="Treatment 3">Treatment 3</option>
      </Select>
      <button onClick={findNearestHospitals}>Find Hospitals</button>
      {nearestHospitals.length > 0 && (
        <>
          <h3>Nearest Hospitals:</h3>
          {nearestHospitals.map(hospital => (
            <HospitalCard key={hospital.name}>
              <HospitalName>{hospital.name}</HospitalName>
              <HospitalLocation>Location: {hospital.location}</HospitalLocation>
              <p>Treatments: {hospital.treatments.join(', ')}</p>
            </HospitalCard>
          ))}
        </>
      )}
    </Container>
  );
};

export default TreatmentForm;
