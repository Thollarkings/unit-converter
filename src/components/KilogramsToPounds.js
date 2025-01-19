import React, { useState } from 'react';
import './converter.css'; // Import the CSS file

const KilogramsToPounds = () => {
    const [value, setValue] = useState('');
    const [result, setResult] = useState('');
    const [isKilogramsToPounds, setIsKilogramsToPounds] = useState(true); // Toggle state

    const handleConversion = (inputValue) => {
        if (isKilogramsToPounds) {
            const pounds = (inputValue * 2.20462).toFixed(2);
            setResult(`${pounds} lbs`);
        } else {
            const kilograms = (inputValue / 2.20462).toFixed(2);
            setResult(`${kilograms} kg`);
        }
    };

    return (
        <div>
            <h2>{isKilogramsToPounds ? 'Kilograms to Pounds' : 'Pounds to Kilograms'} Converter</h2>
            <input
                className='input'
                type="number"
                placeholder={isKilogramsToPounds ? 'Enter Kilograms' : 'Enter Pounds'}
                value={value}
                onChange={(e) => {
                    const inputValue = e.target.value;
                    setValue(inputValue);
                    handleConversion(inputValue);
                }}
            />
            <p className='result'>
                {value}{isKilogramsToPounds ? ' kg' : ' lbs'} is equal to {result}.
            </p>
            <button
                onClick={() => {
                    setIsKilogramsToPounds(!isKilogramsToPounds);
                    setValue('');
                    setResult('');
                }}
                className="button" // Add the class name 'button' to the button
            >
                Switch to {isKilogramsToPounds ? 'Pounds to Kilograms' : 'Kilograms to Pounds'}
            </button>
        </div>
    );
};

export default KilogramsToPounds;