import {useState, useEffect} from 'react';
import {colorTemperature2rgb} from 'color-temperature';

import './styles.css';

/**
 * Update the background color of the appropriate dom node
 *
 * @param color string
 */
const setBackgroundColor = (color: string) => {
  const rootElement = document.getElementById('root');
  if (rootElement) {
    rootElement.style.setProperty('--color-selected-temperature', color);
  }
};

/**
 * Generate a CSS-friendly string representing the color we want to set the background
 *
 * @param value number
 * @returns string
 */
const getRgbFromKelvin = (value: number) => {
  if (value == 0) {
    return 'transparent';
  }

  const temperature = colorTemperature2rgb(value);
  return `rgb(${temperature.red}, ${temperature.green}, ${temperature.blue})`;
};

export default function App() {
  const [temp, setTemp] = useState(0);

  useEffect(() => {
    setBackgroundColor(getRgbFromKelvin(temp));
  }, [temp]);

  return (
    <div className="App">
      <button className="cta" onClick={() => setTemp(2700)}>
        Set Temp 2700
      </button>
      <button className="cta" onClick={() => setTemp(3000)}>
        Set Temp 3000
      </button>
      <button className="cta" onClick={() => setTemp(3500)}>
        Set Temp 3500
      </button>
      <button className="cta" onClick={() => setTemp(4000)}>
        Set Temp 4000
      </button>
      <button className="cta" onClick={() => setTemp(5000)}>
        Set Temp 5000
      </button>
      <button className="cta" onClick={() => setTemp(0)}>
        Off
      </button>
    </div>
  );
}
