import { createContext, useContext, useState } from "react";
import JSONData from "../data/cities.json";

const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
	const [city, setCity] = useState(
		JSONData.find((data) => data.name === "Denizli")
	);
	const [darkMode, setDarkMode] = useState(
		localStorage.getItem("darkMode") || ""
	);
	const [weatherData, setWeatherData] = useState([]);

	const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

	const values = {
		city,
		setCity,
		weatherData,
		setWeatherData,
		darkMode,
		setDarkMode,
		JSONData,
		days,
	};
	return (
		<WeatherContext.Provider value={values}>{children}</WeatherContext.Provider>
	);
};

export const useWeather = () => useContext(WeatherContext);
