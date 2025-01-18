import React, { useState } from 'react';
import './converter.css'; // Import the CSS file

const MilesToKilometers = () => {
  const [value, setValue] = useState('');
  const [result, setResult] = useState('');
  const [isMilesToKm, setIsMilesToKm] = useState(true); // Toggle state

  const handleConversion = (inputValue) => {
    if (isMilesToKm) {
      const km = (inputValue * 1.60934).toFixed(2);
      setResult(`${km} kilometers`);
    } else {
      const miles = (inputValue / 1.60934).toFixed(2);
      setResult(`${miles} miles`);
    }
  };

  return (
    <div>
      <h2>{isMilesToKm ? 'Miles to Kilometers' : 'Kilometers to Miles'} Converter</h2>
      <input
        className='input'
        type="number"
        placeholder={isMilesToKm ? 'Enter miles' : 'Enter kilometers'}
        value={value}
        onChange={(e) => {
          const inputValue = e.target.value;
          setValue(inputValue);
          handleConversion(inputValue);
        }}
      />
      <p>
        {value} {isMilesToKm ? 'miles' : 'kilometers'} is equal to {result}.
      </p>
      <button
        onClick={() => {
          setIsMilesToKm(!isMilesToKm);
          setValue('');
          setResult('');
        }}
        className="button" // Add the class name 'button' to the button
      >
        Switch to {isMilesToKm ? 'Kilometers to Miles' : 'Miles to Kilometers'}
      </button>
    </div>
  );
};

export default MilesToKilometers;