// import React, { useState } from "react";
// import { useTransition, animated } from "react-spring";
// import "./Plans.css";

// const plans = [
//   {
//     id: 1,
//     title: "Lose Weight Plan",
//     image: "lose-weight.jpg",
//     measures: [
//       "Set a realistic weight loss goal.",
//       "Create a calorie deficit through a balanced diet and exercise.",
//       "Monitor your progress regularly.",
//       "Stay consistent with your plan.",
//       "Seek support from a healthcare professional if needed.",
//     ],
//   },
//   {
//     id: 2,
//     title: "Gain Weight Plan",
//     image: "gain-weight.jpg",
//     measures: [
//       "Calculate your daily calorie needs for weight gain.",
//       "Focus on consuming nutrient-dense, calorie-rich foods.",
//       "Incorporate resistance training into your fitness routine.",
//       "Track your weight gain progress.",
//       "Stay patient and consistent with your plan.",
//     ],
//   },
//   {
//     id: 3,
//     title: "Muscle Gain Plan",
//     image: "muscle-gain.jpg",
//     measures: [
//       "Focus on compound exercises that target multiple muscle groups.",
//       "Train with progressive overload to gradually increase weights.",
//       "Consume a balanced diet with adequate protein for muscle repair and growth.",
//       "Include rest days for muscle recovery.",
//       "Track your progress and adjust your plan accordingly.",
//     ],
//   },
//   {
//     id: 4,
//     title: "Body Builder Plan",
//     image: "body-builder.jpg",
//     measures: [
//       "Design a workout routine with a focus on hypertrophy (muscle growth).",
//       "Follow a strict nutrition plan with sufficient protein intake.",
//       "Incorporate advanced training techniques like drop sets and supersets.",
//       "Ensure adequate rest and recovery between intense workout sessions.",
//       "Work with a qualified coach or trainer for guidance.",
//     ],
//   },
// ];

// const Plans = () => {
//   const [selectedPlan, setSelectedPlan] = useState(null);

//   const selectPlan = (planId) => {
//     setSelectedPlan(planId);
//   };

//   const transitions = useTransition(selectedPlan, null, {
//     from: { opacity: 0, transform: "translateX(-20px)" },
//     enter: { opacity: 1, transform: "translateX(0px)" },
//     leave: { opacity: 0, transform: "translateX(20px)" },
//   });

//   return (
//     <div className="container">
//       <h1>Select a Plan</h1>
//       <div className="plan-list">
//         {plans.map((plan) => (
//           <div
//             className={`plan ${selectedPlan === plan.id ? "selected" : ""}`}
//             key={plan.id}
//             onClick={() => selectPlan(plan.id)}
//           >
//             <img src={plan.image} alt={plan.title} />
//             <h2>{plan.title}</h2>
//           </div>
//         ))}
//       </div>

//       {transitions.map(
//         ({ item, key, props }) =>
//           item && (
//             <animated.div key={key} style={props} className="measures-container">
//               <h2>Measures to Follow</h2>
//               {plans
//                 .find((plan) => plan.id === item)
//                 .measures.map((measure, index) => (
//                   <div className="measure" key={index}>
//                     <span>{index + 1}.</span> {measure}
//                   </div>
//                 ))}
//             </animated.div>
//           )
//       )}
//     </div>
//   );
// };

// export default Plans;
import React from 'react';
import myscles from './components/myscles.jpg';
import './AboutSection.css'; // Import your CSS file
import dietplan from './components/dietplan.jpg';
import exercise from './components/exercise.webp';
import remote from './components/remotemonitor.jpg';
import gainweight from './components/gainweight.jpg';
import loss from './components/loss.jpg';
import body from './components/body.jpg';
import bodybuilder from './components/bodybuilderplan.jpg';
const Plans = () => {
  return (
    <section className="about-section">
      <div className="container">
        <center><h1>HEALTHO</h1></center>
        <p>
          Stay Fit Stay Healthy! We provide a variety of plans to ensure your health and well-being.
        </p>
        <div className="features">
          <div className="feature">
            <img src={gainweight} alt="Exercise Plan" />
            <h3>Gain Weight Plan</h3>
            <p>Stay fit with our personalized exercise plans designed to meet your specific needs.</p>
            <button className="select-button">Select Plan</button>
          </div>
          <div className="feature">
            <img src={loss} alt="Diet Plan" />
            <h3>Lose Weight Plan</h3>
            <p>Get a customized diet plan from our expert nutritionists to maintain a healthy lifestyle.</p>
            <button className="select-button">Select Plan</button>
          </div>
          <div className="feature">
            <img src={myscles} alt="AI-powered Diagnostics" />
            <h3>Build Muscles Plan</h3>
            <p>Our advanced AI technology assists in accurate and efficient diagnostics for better treatment.</p>
            <button className="select-button">Select Plan</button>
          </div>
          <div className="feature">
            <img src={bodybuilder} alt="Remote Monitoring" />
            <h3>Body Build Plan</h3>
            <p>Monitor your health remotely using our cutting-edge devices and stay connected with your healthcare team.</p>
            <button className="select-button">Select Plan</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Plans;
