import React, { useState } from 'react';
import './converter.css'; // Import the CSS file

const YardsToMeters = () => {
    const [value, setValue] = useState('');
    const [result, setResult] = useState('');
    const [isYardsToMeters, setIsYardsToMeters] = useState(true); // Toggle state

    const handleConversion = (inputValue) => {
        if (isYardsToMeters) {
            const meters = (inputValue * 0.9144).toFixed(2);
            setResult(`${meters} m`);
        } else {
            const yards = (inputValue / 0.9144).toFixed(2);
            setResult(`${yards} yd`);
        }
    };

    return (
        <div>
            <h2>{isYardsToMeters ? 'Yards to Meters' : 'Meters to Yards'} Converter</h2>
            <input
                className='input'
                type="number"
                placeholder={isYardsToMeters ? 'Enter Yards' : 'Enter Meters'}
                value={value}
                onChange={(e) => {
                    const inputValue = e.target.value;
                    setValue(inputValue);
                    handleConversion(inputValue);
                }}
            />
            <p>
                {value}{isYardsToMeters ? ' yd' : ' m'} is equal to {result}.
            </p>
            <button
                onClick={() => {
                    setIsYardsToMeters(!isYardsToMeters);
                    setValue('');
                    setResult('');
                }}
                className="button" // Add the class name 'button' to the button
            >
                Switch to {isYardsToMeters ? 'Meters to Yards' : 'Yards to Meters'}
            </button>
        </div>
    );
};

export default YardsToMeters;