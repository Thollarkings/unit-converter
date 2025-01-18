import React, { useState } from 'react';
import './converter.css'; // Import the CSS file

const FeetToMeters = () => {
    const [inputValue, setInputValue] = useState('');
    const [outputValue, setOutputValue] = useState('');
    const [isFeetToMeters, setIsFeetToMeters] = useState(true);

    const convert = (value) => {
        if (isFeetToMeters) {
            const meters = (value * 0.3048).toFixed(2);
            setOutputValue(meters);
        } else {
            const feet = (value / 0.3048).toFixed(2);
            setOutputValue(feet);
        }
    };

    const handleToggle = () => {
        setIsFeetToMeters(!isFeetToMeters);
        setInputValue('');
        setOutputValue('');
    };

    return (
        <div>
            <h2>{isFeetToMeters ? 'Feet to Meters' : 'Meters to Feet'} Converter</h2>
            <input
                className='input'
                type="number"
                placeholder={isFeetToMeters ? 'Enter feet' : 'Enter meters'}
                value={inputValue}
                onChange={(e) => {
                    const value = e.target.value;
                    setInputValue(value);
                    convert(value);
                }}
            />
            <p>
                {inputValue} {isFeetToMeters ? 'feet' : 'meters'} is equal to {outputValue}{' '}
                {isFeetToMeters ? 'meters' : 'feet'}.
            </p>
            <button
                onClick={handleToggle}
                className='button'
            >
                Switch to {isFeetToMeters ? 'Meters to Feet' : 'Feet to Meters'}
            </button>
        </div>
    );
};

export default FeetToMeters;