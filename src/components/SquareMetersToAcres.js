import React, { useState } from 'react';
import './converter.css'; // Import the CSS file

const SquareMetersToAcres = () => {
    const [value, setValue] = useState('');
    const [result, setResult] = useState('');
    const [isSquareMetersToAcres, setIsSquareMetersToAcres] = useState(true); // Toggle state

    const handleConversion = (inputValue) => {
        if (isSquareMetersToAcres) {
            const acres = (inputValue * 0.000247105).toFixed(4); // Conversion factor
            setResult(`${acres} acres`);
        } else {
            const squareMeters = (inputValue / 0.000247105).toFixed(2); // Reverse conversion
            setResult(`${squareMeters} m²`);
        }
    };

    return (
        <div>
            <h2>{isSquareMetersToAcres ? 'Square Meters to Acres' : 'Acres to Square Meters'} Converter</h2>
            <input
                className='input'
                type="number"
                placeholder={isSquareMetersToAcres ? 'Enter Square Meters' : 'Enter Acres'}
                value={value}
                onChange={(e) => {
                    const inputValue = e.target.value;
                    setValue(inputValue);
                    handleConversion(inputValue);
                }}
            />
            <p>
                {value} {isSquareMetersToAcres ? 'm²' : 'acres'} is equal to {result}.
            </p>
            <button
                onClick={() => {
                    setIsSquareMetersToAcres(!isSquareMetersToAcres);
                    setValue('');
                    setResult('');
                }}
                className="button" // Add the class name 'button' to the button
            >
                Switch to {isSquareMetersToAcres ? 'Acres to Square Meters' : 'Square Meters to Acres'}
            </button>
        </div>
    );
};

export default SquareMetersToAcres;