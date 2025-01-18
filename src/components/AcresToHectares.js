import React, { useState } from 'react';
import './converter.css'; // Import the CSS file

const AcresToHectares = () => {
    const [value, setValue] = useState('');
    const [result, setResult] = useState('');
    const [isAcresToHectares, setIsAcresToHectares] = useState(true); // Toggle state

    const handleConversion = (inputValue) => {
        if (isAcresToHectares) {
            const hectares = (inputValue * 0.404686).toFixed(4); // Conversion factor
            setResult(`${hectares} hectares`);
        } else {
            const acres = (inputValue / 0.404686).toFixed(4); // Reverse conversion
            setResult(`${acres} acres`);
        }
    };

    return (
        <div>
            <h2>{isAcresToHectares ? 'Acres to Hectares' : 'Hectares to Acres'} Converter</h2>
            <input
                className='input'
                type="number"
                placeholder={isAcresToHectares ? 'Enter Acres' : 'Enter Hectares'}
                value={value}
                onChange={(e) => {
                    const inputValue = e.target.value;
                    setValue(inputValue);
                    handleConversion(inputValue);
                }}
            />
            <p>
                {value} {isAcresToHectares ? 'acres' : 'hectares'} is equal to {result}.
            </p>
            <button
                onClick={() => {
                    setIsAcresToHectares(!isAcresToHectares);
                    setValue('');
                    setResult('');
                }}
                className="button" // Add the class name 'button' to the button
            >
                Switch to {isAcresToHectares ? 'Hectares to Acres' : 'Acres to Hectares'}
            </button>
        </div>
    );
};

export default AcresToHectares;