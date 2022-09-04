import { useWeather } from "../context/WeatherContext";
import { FaSun, FaRegMoon } from "react-icons/fa";

function Menu() {
	const { city, setCity, darkMode, setDarkMode, JSONData } = useWeather();

	const handleCity = (event) => {
		setCity(JSONData.find((data) => data.name === event.target.value));
	};

	const handleMode = () => {
		return setDarkMode(darkMode === "" ? "dark" : "");
	};

	return (
		<div className="menu-bar">
			<select name="city" id="city" value={city.name} onChange={handleCity}>
				{JSONData.map((item) => (
					<option key={item.id} value={item.name}>
						{item.name}
					</option>
				))}
			</select>
			<span className="toggle" onClick={handleMode}>
				{darkMode ? <FaRegMoon /> : <FaSun />}
			</span>
		</div>
	);
}

export default Menu;
