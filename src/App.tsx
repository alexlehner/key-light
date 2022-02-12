import "./styles.css";
import { colorTemperature2rgb } from "color-temperature";

const temps = [5000, 4000, 3500, 3000, 2700];

export default function App() {
  const handleClick = () => {
    let temperature = colorTemperature2rgb(
      temps[Math.floor(Math.random() * temps.length)]
    );
    console.log(temperature);

    const rootElement = document.getElementById("root");
    if (rootElement) {
      rootElement.style.setProperty(
        "--color-selected-temperature",
        `rgb(${temperature.red}, ${temperature.green}, ${temperature.blue})`
      );
    }
  };

  return (
    <div className="App">
      <button className="cta" onClick={handleClick}>
        Shuffle temperature
      </button>
    </div>
  );
}
