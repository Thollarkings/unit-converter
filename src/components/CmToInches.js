import React, { useState } from 'react';
import './converter.css'; // Import the CSS file

const CmToInches = () => {
  const [inputValue, setInputValue] = useState('');
  const [outputValue, setOutputValue] = useState('');
  const [isCmToInInches, setIsCmToInInches] = useState(true);

  const convert = (value) => {
    if (isCmToInInches) {
      const inch = (value / 2.54).toFixed(2);
      setOutputValue(inch);
    } else {
      const cm = (value * 2.54).toFixed(2);
      setOutputValue(cm);
    }
  };

  const handleToggle = () => {
    setIsCmToInInches(!isCmToInInches);
    setInputValue('');
    setOutputValue('');
  };

  return (
    <div>
      <h2>{isCmToInInches ? 'Centimeters to Inches' : 'Inches to Centimeters'} Converter</h2>
      <input
        className='input'
        type="number"
        placeholder={isCmToInInches ? 'Enter centimeters' : 'Enter inches'}
        value={inputValue}
        onChange={(e) => {
          const value = e.target.value;
          setInputValue(value);
          convert(value);
        }}
      />
      <p>
        {inputValue} {isCmToInInches ? 'cm' : 'inches'} is equal to {outputValue}{' '}
        {isCmToInInches ? 'inches' : 'cm'}.
      </p>
      <button
        onClick={handleToggle}
        className="button" // Apply the CSS class to the button
      >
        Switch to {isCmToInInches ? 'Inches to Centimeters' : 'Centimeters to Inches'}
      </button>
    </div>
  );
};

export default CmToInches;