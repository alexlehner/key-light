import {useState, useEffect} from 'react';
import {colorTemperature2rgb} from 'color-temperature';
import {MantineProvider} from '@mantine/core';
import {getRgbFromKelvin} from './utils';

import SelectTemp from './SelectTemp';

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

export default function App() {
  const [temp, setTemp] = useState(0);

  useEffect(() => {
    setBackgroundColor(getRgbFromKelvin(temp));
  }, [temp]);

  return (
    <MantineProvider theme={{colorScheme: 'dark'}}>
      <div className="App">
        <SelectTemp setTemp={setTemp} temp={temp} />
      </div>
    </MantineProvider>
  );
}
