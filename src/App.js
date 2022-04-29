import { useState } from 'react';
import './App.css';
import WeatherForm from './components/WeatherForm';
import WeatherInfoShow from './components/WeatherInfoShow';

export const WeatherIcons = {
    '01d': '/src/icons/sunny.svg',
    '01n': '/src/icons/night.svg',
    '02d': '/src/icons/day.svg',
    '02n': '/src/icons/cloudy-night.svg',
    '03d': '/src/icons/cloudy.svg',
    '03n': '/src/icons/cloudy.svg',
    '04d': '/src/icons/perfect-day.svg',
    '04n': '/src/icons/cloudy-night.svg',
    '09d': '/src/icons/rain.svg',
    '09n': '/src/icons/rain-night.svg',
    '10d': '/src/icons/rain.svg',
    '10n': '/src/icons/rain-night.svg',
    '11d': '/src/icons/storm.svg',
    '11n': '/src/icons/storm.svg',
};

function App() {
    const [city, setCity] = useState('');
    const [gotData, setGotData] = useState(false);
    const [weatherData, setWeatherData] = useState([]);
    const [isDay, setIsDay] = useState(false);

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
                <p>Build with ❤️ using React JS, by Sandip Karmokar</p>
                <a
                    href="https://github.com/sandipkarmokar/weather-app"
                    rel="noreferrer"
                    target="_blank"
                >
                    source code
                </a>
            </footer>
        </div>
    );
}

export default App;
