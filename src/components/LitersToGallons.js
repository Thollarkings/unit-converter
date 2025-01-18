import React, { useState } from 'react';
import './converter.css'; // Import the CSS file

const LitersToGallons = () => {
    const [value, setValue] = useState('');
    const [result, setResult] = useState('');
    const [isLitersToGallons, setIsLitersToGallons] = useState(true); // Toggle state

    const handleConversion = (inputValue) => {
        if (isLitersToGallons) {
            const gallons = (inputValue * 0.264172).toFixed(2);
            setResult(`${gallons} gal`);
        } else {
            const liters = (inputValue / 0.264172).toFixed(2);
            setResult(`${liters} L`);
        }
    };

    return (
        <div>
            <h2>{isLitersToGallons ? 'Liters to Gallons' : 'Gallons to Liters'} Converter</h2>
            <input
                className='input'
                type="number"
                placeholder={isLitersToGallons ? 'Enter Liters' : 'Enter Gallons'}
                value={value}
                onChange={(e) => {
                    const inputValue = e.target.value;
                    setValue(inputValue);
                    handleConversion(inputValue);
                }}
            />
            <p>
                {value}{isLitersToGallons ? ' L' : ' gal'} is equal to {result}.
            </p>
            <button
                onClick={() => {
                    setIsLitersToGallons(!isLitersToGallons);
                    setValue('');
                    setResult('');
                }}
                className="button" // Add the class name 'button' to the button
            >
                Switch to {isLitersToGallons ? 'Gallons to Liters' : 'Liters to Gallons'}
            </button>
        </div>
    );
};

export default LitersToGallons;