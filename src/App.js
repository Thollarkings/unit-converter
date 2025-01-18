import React, { useState } from 'react';
import MilesToKilometers from './components/MilesToKilometers';
import CmToInches from './components/CmToInches';
import FeetToMeters from './components/FeetToMeters';
import CelsiusToFahrenheit from './components/CelsiusToFahrenheit';
import KilogramsToPounds from './components/KilogramsToPounds';
import LitersToGallons from './components/LitersToGallons';
import YardsToMeters from './components/YardsToMeters';
import SquareFeetToSquareMeters from './components/SquareFeetToSquareMeters';
import PintsToLiters from './components/PintsToLiters';
import CupsToMilliliters from './components/CupsToMilliliters';
import OuncesToMilliliters from './components/OuncesToMilliliters';
import CelsiusToKelvin from './components/CelsiusToKelvin';
import SquareMetersToAcres from './components/SquareMetersToAcres';
import AcresToHectares from './components/AcresToHectares';
import './App.css';

const App = () => {
  const [selectedConversion, setSelectedConversion] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);
  const [openCategory, setOpenCategory] = useState(null);

  const conversions = {
    'Length and Distance': [
      { name: 'Miles to Kilometers', value: 'MilesToKilometers' },
      { name: 'Centimeters to Inches', value: 'CmToInches' },
      { name: 'Feet to Meters', value: 'FeetToMeters' },
      { name: 'Yards to Meters', value: 'YardsToMeters' },
    ],
    'Volume': [
      { name: 'Liters to Gallons', value: 'LitersToGallons' },
      { name: 'Pints to Liters', value: 'PintsToLiters' },
      { name: 'Cups to Milliliters', value: 'CupsToMilliliters' },
      { name: 'Ounces to Milliliters', value: 'OuncesToMilliliters' },
    ],
    'Temperature': [
      { name: 'Celsius to Fahrenheit', value: 'CelsiusToFahrenheit' },
      { name: 'Celsius to Kelvin', value: 'CelsiusToKelvin' },
    ],
    'Area': [
      { name: 'ft² to m²', value: 'SquareFeetToSquareMeters' },
      { name: 'm² To Acres', value: 'SquareMetersToAcres' },
      { name: 'Acres To Hectares', value: 'AcresToHectares' },
    ],
  };

  const renderComponent = () => {
    switch (selectedConversion) {
      case 'KilogramsToPounds':
        return <KilogramsToPounds />;
      case 'MilesToKilometers':
        return <MilesToKilometers />;
      case 'CmToInches':
        return <CmToInches />;
      case 'FeetToMeters':
        return <FeetToMeters />;
      case 'YardsToMeters':
        return <YardsToMeters />;
      case 'CelsiusToFahrenheit':
        return <CelsiusToFahrenheit />;
      case 'CelsiusToKelvin':
        return <CelsiusToKelvin />;
      case 'LitersToGallons':
        return <LitersToGallons />;
      case 'PintsToLiters':
        return <PintsToLiters />;
      case 'CupsToMilliliters':
        return <CupsToMilliliters />;
      case 'OuncesToMilliliters':
        return <OuncesToMilliliters />;
      case 'SquareFeetToSquareMeters':
        return <SquareFeetToSquareMeters />;
      case 'SquareMetersToAcres':
        return <SquareMetersToAcres />;
      case 'AcresToHectares':
        return <AcresToHectares />;

      default:
        return <p className='instruction'>Please select a conversion type from the menu.</p>;
    }
  };

  const toggleCategory = (category) => {
    setOpenCategory(openCategory === category ? null : category);
  };

  return (
    <div className='background'> {/* Apply background class here */}
      <div className='main-div'>
        <h1>Unit Converter</h1>
        <div className="menu-container">
          {/* Hamburger Menu Icon */}
          <button
            className="hamburger-menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </button>

          {/* Dropdown Menu */}
          {menuOpen && (
            <ul className="dropdown-menu" role="menu">
              {Object.keys(conversions).map((category) => (
                <li key={category}>
                  <button
                    onClick={() => toggleCategory(category)}
                    className='category-item' // Use button for category
                    aria-expanded={openCategory === category} // Accessibility
                  >
                    {category}
                  </button>
                  {openCategory === category && (
                    <ul className="submenu"> {/* Submenu for the selected category */}
                      {conversions[category].map((conversion) => (
                        <li
                          key={conversion.value}
                          className="menu-item"
                          onClick={() => {
                            setSelectedConversion(conversion.value);
                            setMenuOpen(false);
                          }}
                        >
                          {conversion.name}
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="content-container">{renderComponent()}</div>
      </div>
      <footer id="footer">
        <h5>&copy; Thollarkings 2025</h5>
      </footer>
    </div>
  );
};

export default App;