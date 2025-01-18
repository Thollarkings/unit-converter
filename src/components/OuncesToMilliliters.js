import React, { useState } from 'react';
import './converter.css'; // Import the CSS file

const OuncesToMilliliters = () => {
    const [value, setValue] = useState('');
    const [result, setResult] = useState('');
    const [isOuncesToMilliliters, setIsOuncesToMilliliters] = useState(true); // Toggle state

    const handleConversion = (inputValue) => {
        if (isOuncesToMilliliters) {
            const milliliters = (inputValue * 29.5735).toFixed(2);
            setResult(`${milliliters} mL`);
        } else {
            const ounces = (inputValue / 29.5735).toFixed(2);
            setResult(`${ounces} oz`);
        }
    };

    return (
        <div>
            <h2>{isOuncesToMilliliters ? 'Ounces to Milliliters' : 'Milliliters to Ounces'} Converter</h2>
            <input
                className='input'
                type="number"
                placeholder={isOuncesToMilliliters ? 'Enter Ounces' : 'Enter Milliliters'}
                value={value}
                onChange={(e) => {
                    const inputValue = e.target.value;
                    setValue(inputValue);
                    handleConversion(inputValue);
                }}
            />
            <p>
                {value}{isOuncesToMilliliters ? ' oz' : ' mL'} is equal to {result}.
            </p>
            <button
                onClick={() => {
                    setIsOuncesToMilliliters(!isOuncesToMilliliters);
                    setValue('');
                    setResult('');
                }}
                className="button" // Add the class name 'button' to the button
            >
                Switch to {isOuncesToMilliliters ? 'Milliliters to Ounces' : 'Ounces to Milliliters'}
            </button>
        </div>
    );
};

export default OuncesToMilliliters;