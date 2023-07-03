import React from 'react';
import { Bar, Pie } from 'react-chartjs-2';
import './Dashboard.css'; // Import your custom CSS file for styling
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js'
  import { Chart } from 'react-chartjs-2'
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Bar
  )
const Dashboard = () => {
  // Sample data for medical analysis
  const medicalData = {
    name: 'John Doe',
    age: 35,
    weight: 75,
    bloodPressure: [120, 80, 90, 110, 100, 95, 105],
    cholesterol: {
      ldl: 150,
      hdl: 50,
      triglycerides: 200
    },
    bmi: 24.5
  };

  // Calculate average blood pressure
  const averageBloodPressure =
    medicalData.bloodPressure.reduce((acc, curr) => acc + curr, 0) /
    medicalData.bloodPressure.length;

  // Chart data for blood pressure
  const bloodPressureChartData = {
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    datasets: [
      {
        label: 'Blood Pressure',
        data: medicalData.bloodPressure,
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1
      }
    ]
  };

  // Chart data for cholesterol
  const cholesterolChartData = {
    labels: ['LDL', 'HDL', 'Triglycerides'],
    datasets: [
      {
        data: [
          medicalData.cholesterol.ldl,
          medicalData.cholesterol.hdl,
          medicalData.cholesterol.triglycerides
        ],
        backgroundColor: ['rgba(255, 99, 132, 0.6)', 'rgba(54, 162, 235, 0.6)', 'rgba(75, 192, 192, 0.6)'],
        borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(75, 192, 192, 1)'],
        borderWidth: 1
      }
    ]
  };

  return (
    <div className="dashboard-container">
      <h1 className="dashboard-name">{medicalData.name}</h1>
      <div className="chart-container">
        <div className="bar-chart">
          <h2>Average Blood Pressure</h2>
          <Bar
            data={bloodPressureChartData}
            options={{
              responsive: true,
              maintainAspectRatio: false,
              scales: {
                y: {
                  beginAtZero: true
                }
              }
            }}
          />
        </div>
        <div className="pie-chart">
          <h2>Cholesterol</h2>
          <Pie
            data={cholesterolChartData}
            options={{
              responsive: true,
              maintainAspectRatio: false
            }}
          />
        </div>
      </div>
      <div className="medical-info">
        <p>Age: {medicalData.age}</p>
        <p>Weight: {medicalData.weight} kg</p>
        <p>Average Blood Pressure: {averageBloodPressure}</p>
        <p>BMI: {medicalData.bmi}</p>
      </div>
    </div>
  );
};

export default Dashboard;
