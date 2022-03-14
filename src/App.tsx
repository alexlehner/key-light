import {useState, useEffect} from 'react';
import {colorTemperature2rgb} from 'color-temperature';
import {Group, Button} from '@mantine/core';

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
      <Group className="colorSelect">
        <Button
          variant="outline"
          onClick={() => {
            setTemp(2700);
          }}
        >
          2700
        </Button>
        <Button
          variant="outline"
          onClick={() => {
            setTemp(3000);
          }}
        >
          3000
        </Button>
        <Button
          variant="outline"
          onClick={() => {
            setTemp(4000);
          }}
        >
          4000
        </Button>
        <Button
          variant="outline"
          onClick={() => {
            setTemp(5000);
          }}
        >
          5000
        </Button>
        <Button
          variant="outline"
          onClick={() => {
            setTemp(0);
          }}
        >
          Off
        </Button>
      </Group>
    </div>
  );
}
