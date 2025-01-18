import React, { useState } from 'react';
import './converter.css'; // Import the CSS file

const SquareFeetToSquareMeters = () => {
    const [value, setValue] = useState('');
    const [result, setResult] = useState('');
    const [isSquareFeetToSquareMeters, setIsSquareFeetToSquareMeters] = useState(true); // Toggle state

    const handleConversion = (inputValue) => {
        if (isSquareFeetToSquareMeters) {
            const squareMeters = (inputValue * 0.092903).toFixed(2);
            setResult(`${squareMeters} m²`);
        } else {
            const squareFeet = (inputValue / 0.092903).toFixed(2);
            setResult(`${squareFeet} ft²`);
        }
    };

    return (
        <div>
            <h2>{isSquareFeetToSquareMeters ? 'Square Feet to Square Meters' : 'Square Meters to Square Feet'} Converter</h2>
            <input
                className='input'
                type="number"
                placeholder={isSquareFeetToSquareMeters ? 'Enter Square Feet' : 'Enter Square Meters'}
                value={value}
                onChange={(e) => {
                    const inputValue = e.target.value;
                    setValue(inputValue);
                    handleConversion(inputValue);
                }}
            />
            <p>
                {value}{isSquareFeetToSquareMeters ? ' ft²' : ' m²'} is equal to {result}.
            </p>
            <button
                onClick={() => {
                    setIsSquareFeetToSquareMeters(!isSquareFeetToSquareMeters);
                    setValue('');
                    setResult('');
                }}
                className="button" // Add the class name 'button' to the button
            >
                Switch to {isSquareFeetToSquareMeters ? 'Square Meters to Square Feet' : 'Square Feet to Square Meters'}
            </button>
        </div>
    );
};

export default SquareFeetToSquareMeters;