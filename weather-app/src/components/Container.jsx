import Menu from "./Menu";
import Days from "./Days";
import { useWeather } from "../context/WeatherContext";

function Container() {
  const { darkMode } = useWeather();

  return (
    <div className={`container ${darkMode}`}>
      <Menu />
      <Days />
    </div>
  );
}

export default Container;
