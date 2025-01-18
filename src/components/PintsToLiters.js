import React, { useState } from 'react';
import './converter.css'; // Import the CSS file

const PintsToLiters = () => {
    const [value, setValue] = useState('');
    const [result, setResult] = useState('');
    const [isPintsToLiters, setIsPintsToLiters] = useState(true); // Toggle state

    const handleConversion = (inputValue) => {
        if (isPintsToLiters) {
            const liters = (inputValue * 0.473176).toFixed(2);
            setResult(`${liters} L`);
        } else {
            const pints = (inputValue / 0.473176).toFixed(2);
            setResult(`${pints} pt`);
        }
    };

    return (
        <div>
            <h2>{isPintsToLiters ? 'Pints to Liters' : 'Liters to Pints'} Converter</h2>
            <input
                className='input'
                type="number"
                placeholder={isPintsToLiters ? 'Enter Pints' : 'Enter Liters'}
                value={value}
                onChange={(e) => {
                    const inputValue = e.target.value;
                    setValue(inputValue);
                    handleConversion(inputValue);
                }}
            />
            <p>
                {value}{isPintsToLiters ? ' pt' : ' L'} is equal to {result}.
            </p>
            <button
                onClick={() => {
                    setIsPintsToLiters(!isPintsToLiters);
                    setValue('');
                    setResult('');
                }}
                className="button" // Add the class name 'button' to the button
            >
                Switch to {isPintsToLiters ? 'Liters to Pints' : 'Pints to Liters'}
            </button>
        </div>
    );
};

export default PintsToLiters;