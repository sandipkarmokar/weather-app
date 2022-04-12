import { useState, useEffect } from 'react';
import './App.css';
import WeatherForm from './components/WeatherForm';
import WeatherInfoShow from './components/WeatherInfoShow';

export const WeatherIcons = {
    '01d': '../icons/sunny.svg',
    '01n': '../icons/night.svg',
    '02d': '../icons/day.svg',
    '02n': '../icons/cloudy-night.svg',
    '03d': '../icons/cloudy.svg',
    '03n': '../icons/cloudy.svg',
    '04d': '../icons/perfect-day.svg',
    '04n': '../icons/cloudy-night.svg',
    '09d': '../icons/rain.svg',
    '09n': '../icons/rain-night.svg',
    '10d': '../icons/rain.svg',
    '10n': '../icons/rain-night.svg',
    '11d': '../icons/storm.svg',
    '11n': '../icons/storm.svg',
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
            console.log('data fetched');
            setGotData(true);
        } catch (error) {
            console.log(error);
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

                {/* {weatherData.length !== 0 && city ? (
                    <WeatherInfoShow
                        weatherData={weatherData}
                    ></WeatherInfoShow>
                ) : (
                    ''
                )} */}
                <WeatherInfoShow
                    gotData={gotData}
                    weatherData={weatherData}
                ></WeatherInfoShow>
            </div>
            <footer>
                <p>Build with ❤️ using React JS, by Sandip Karmokar</p>
                <p>source code</p>
            </footer>
        </div>
    );
}

export default App;
