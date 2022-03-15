import {ColorSwatch, Group} from '@mantine/core';
import {getRgbFromKelvin} from './utils';

export default function SelectTemp({
  setTemp,
  temp,
}: {
  setTemp: Function;
  temp: Number;
}) {
  const temps = [
    {label: '5K', value: 5000},
    {label: '4K', value: 4000},
    {label: '3K', value: 3000},
    {label: '2.7K', value: 2700},
  ];

  return (
    <Group className="colorSelect">
      {temps.map((t) => {
        return (
          <ColorSwatch
            component="button"
            key={t.value}
            size={75}
            className="colorSwatch"
            color={getRgbFromKelvin(t.value)}
            onClick={() => setTemp(t.value)}
          >
            {temp === t.value ? '✔' : t.label}
          </ColorSwatch>
        );
      })}

      <ColorSwatch
        component="button"
        size={75}
        className="colorSwatch onOff"
        color={'#000'}
        onClick={() => setTemp(0)}
      >
        {temp === 0 ? '✔' : 'Off'}
      </ColorSwatch>
    </Group>
  );
}
