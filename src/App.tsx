import {useState, useEffect} from 'react';

import {MantineProvider} from '@mantine/core';
import {useLocalStorage} from 'usehooks-ts';

import {getRgbFromKelvin} from './utils';
import InfoDrawer from './InfoDrawer';
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
  const [persistedTemp, setPersistedTemp] = useLocalStorage('previousTemp', 0);

  const [temp, setTemp] = useState(persistedTemp);
  const [drawerOpened, setDrawerOpened] = useState(false);

  useEffect(() => {
    setBackgroundColor(getRgbFromKelvin(temp));
    setPersistedTemp(temp);
  }, [temp]);

  return (
    <MantineProvider theme={{colorScheme: 'dark'}}>
      <div className="App">
        <InfoDrawer
          drawerOpened={drawerOpened}
          setDrawerOpened={setDrawerOpened}
        />
        <SelectTemp setTemp={setTemp} temp={temp} />
      </div>
    </MantineProvider>
  );
}
