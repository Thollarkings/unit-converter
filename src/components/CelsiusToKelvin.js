import React, { useState } from 'react';
import './converter.css'; // Import the CSS file

const CelsiusToKelvin = () => {
    const [value, setValue] = useState('');
    const [result, setResult] = useState('');
    const [isCelsiusToKelvin, setIsCelsiusToKelvin] = useState(true); // Toggle state

    const handleConversion = (inputValue) => {
        if (isCelsiusToKelvin) {
            const kelvin = (parseFloat(inputValue) + 273.15).toFixed(2);
            setResult(`${kelvin} K`);
        } else {
            const celsius = (parseFloat(inputValue) - 273.15).toFixed(2);
            setResult(`${celsius}°C`);
        }
    };

    return (
        <div>
            <h2>{isCelsiusToKelvin ? 'Celsius to Kelvin' : 'Kelvin to Celsius'} Converter</h2>
            <input
                className='input'
                type="number"
                placeholder={isCelsiusToKelvin ? 'Enter Celsius' : 'Enter Kelvin'}
                value={value}
                onChange={(e) => {
                    const inputValue = e.target.value;
                    setValue(inputValue);
                    handleConversion(inputValue);
                }}
            />
            <p>
                {value}{isCelsiusToKelvin ? '°C' : ' K'} is equal to {result}.
            </p>
            <button
                onClick={() => {
                    setIsCelsiusToKelvin(!isCelsiusToKelvin);
                    setValue('');
                    setResult('');
                }}
                className="button" // Add the class name 'button' to the button
            >
                Switch to {isCelsiusToKelvin ? 'Kelvin to Celsius' : 'Celsius to Kelvin'}
            </button>
        </div>
    );
};

export default CelsiusToKelvin;