import { useState, useEffect } from 'react';
import './App.css';
import WeatherForm from './components/WeatherForm';
import WeatherInfoShow from './components/WeatherInfoShow';

export const WeatherIcons = {
    '01d': '/react-weather-app/icons/sunny.svg',
    '01n': '/react-weather-app/icons/night.svg',
    '02d': '/react-weather-app/icons/day.svg',
    '02n': '/react-weather-app/icons/cloudy-night.svg',
    '03d': '/react-weather-app/icons/cloudy.svg',
    '03n': '/react-weather-app/icons/cloudy.svg',
    '04d': '/react-weather-app/icons/perfect-day.svg',
    '04n': '/react-weather-app/icons/cloudy-night.svg',
    '09d': '/react-weather-app/icons/rain.svg',
    '09n': '/react-weather-app/icons/rain-night.svg',
    '10d': '/react-weather-app/icons/rain.svg',
    '10n': '/react-weather-app/icons/rain-night.svg',
    '11d': '/react-weather-app/icons/storm.svg',
    '11n': '/react-weather-app/icons/storm.svg',
};

function App() {
    const [city, setCity] = useState('');
    const [gotData, setGotData] = useState(false);
    const [weatherData, setWeatherData] = useState([]);
    const [isDay, setIsDay] = useState(false);

    console.log(weatherData);
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=390f3fd7515cacb5596ae4765de92a6d`;

    const fetchData = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(url);
            const data = await response.json();
            setWeatherData(data);
            setGotData(true);
            const isDay = weatherData?.weather[0].icon?.includes('d');
            setIsDay(isDay);
        } catch (error) {
            console.log(error);
            setGotData(false);
        }
    };

    return (
        <div className="app">
            <div className="heading">
                <p>Weather Finder</p>
            </div>
            <div className="app-container">
                <WeatherForm
                    city={city}
                    setCity={setCity}
                    fetchData={fetchData}
                ></WeatherForm>

                <WeatherInfoShow
                    gotData={gotData}
                    weatherData={weatherData}
                    isDay={isDay}
                ></WeatherInfoShow>
            </div>
            <footer>
                <p>Build with ?????? using React JS, by Sandip Karmokar</p>
                <p>source code</p>
            </footer>
        </div>
    );
}

export default App;
