import React, { useState } from 'react';
import './camponent/basic/style.css';

const BMICalculator =() => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBMI] = useState(null);

  const calculateBMI = () => {
    if (weight && height) {
      const heightInMeters = parseFloat(height)/100;
      const weightInKg = parseFloat(weight);
      const bmiValue = weightInKg / (heightInMeters * heightInMeters);
      setBMI(bmiValue.toFixed(2));
    }
  };

  return (
    <>
      <h1>BMI Calculator</h1>
      <div>
        <label>Weight (kg): </label>
        <input
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
      </div>
      <div>
        <label>Height (cm): </label>
        <input
          type="number"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />
      </div>
      <button onClick={calculateBMI}>Calculate BMI</button>
      {bmi && (
        <div>
          <h2>Your BMI is: {bmi}</h2>
          <p>Result:</p>
          {bmi < 18.5 && <p>Underweight</p>}
          {bmi >= 18.5 && bmi < 24.9 && <p>Normal weight</p>}
          {bmi >= 25 && bmi < 29.9 && <p>Overweight</p>}
          {bmi >= 30 && <p>Obese</p>}
        </div>
      )}
    </>
  );
}

export default BMICalculator;
