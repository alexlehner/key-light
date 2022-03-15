import {colorTemperature2rgb} from 'color-temperature';

/**
 * Generate a CSS-friendly string representing the color we want to set the background
 *
 * @param value number
 * @returns string
 */
export function getRgbFromKelvin(value: number) {
  if (value == 0) {
    return 'transparent';
  }

  const temperature = colorTemperature2rgb(value);
  return `rgb(${temperature.red}, ${temperature.green}, ${temperature.blue})`;
}
