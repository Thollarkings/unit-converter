import React, { useState } from 'react';
import './converter.css'; // Import the CSS file

const CelsiusToFahrenheit = () => {
    const [value, setValue] = useState('');
    const [result, setResult] = useState('');
    const [isCelsiusToFahrenheit, setIsCelsiusToFahrenheit] = useState(true); // Toggle state

    const handleConversion = (inputValue) => {
        if (isCelsiusToFahrenheit) {
            const fahrenheit = ((inputValue * 9) / 5 + 32).toFixed(2);
            setResult(`${fahrenheit}°F`);
        } else {
            const celsius = (((inputValue - 32) * 5) / 9).toFixed(2);
            setResult(`${celsius}°C`);
        }
    };

    return (
        <div>
            <h2>{isCelsiusToFahrenheit ? 'Celsius to Fahrenheit' : 'Fahrenheit to Celsius'} Converter</h2>
            <input
                className='input'
                type="number"
                placeholder={isCelsiusToFahrenheit ? 'Enter Celsius' : 'Enter Fahrenheit'}
                value={value}
                onChange={(e) => {
                    const inputValue = e.target.value;
                    setValue(inputValue);
                    handleConversion(inputValue);
                }}
            />
            <p>
                {value}{isCelsiusToFahrenheit ? '°C' : '°F'} is equal to {result}.
            </p>
            <button
                onClick={() => {
                    setIsCelsiusToFahrenheit(!isCelsiusToFahrenheit);
                    setValue('');
                    setResult('');
                }}
                className="button" // Add the class name 'button' to the button
            >
                Switch to {isCelsiusToFahrenheit ? 'Fahrenheit to Celsius' : 'Celsius to Fahrenheit'}
            </button>
        </div>
    );
};

export default CelsiusToFahrenheit;