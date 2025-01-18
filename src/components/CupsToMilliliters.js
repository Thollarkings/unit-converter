import React, { useState } from 'react';
import './converter.css'; // Import the CSS file

const CupsToMilliliters = () => {
    const [value, setValue] = useState('');
    const [result, setResult] = useState('');
    const [isCupsToMilliliters, setIsCupsToMilliliters] = useState(true); // Toggle state

    const handleConversion = (inputValue) => {
        if (isCupsToMilliliters) {
            const milliliters = (inputValue * 236.588).toFixed(2);
            setResult(`${milliliters} mL`);
        } else {
            const cups = (inputValue / 236.588).toFixed(2);
            setResult(`${cups} cups`);
        }
    };

    return (
        <div>
            <h2>{isCupsToMilliliters ? 'Cups to Milliliters' : 'Milliliters to Cups'} Converter</h2>
            <input
                className='input'
                type="number"
                placeholder={isCupsToMilliliters ? 'Enter Cups' : 'Enter Milliliters'}
                value={value}
                onChange={(e) => {
                    const inputValue = e.target.value;
                    setValue(inputValue);
                    handleConversion(inputValue);
                }}
            />
            <p>
                {value}{isCupsToMilliliters ? ' cups' : ' mL'} is equal to {result}.
            </p>
            <button
                onClick={() => {
                    setIsCupsToMilliliters(!isCupsToMilliliters);
                    setValue('');
                    setResult('');
                }}
                className="button" // Add the class name 'button' to the button
            >
                Switch to {isCupsToMilliliters ? 'Milliliters to Cups' : 'Cups to Milliliters'}
            </button>
        </div>
    );
};

export default CupsToMilliliters;