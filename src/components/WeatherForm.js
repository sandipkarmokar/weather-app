import React from 'react';
import mainImage from '../icons/perfect-day.svg';

const WeatherForm = ({ city, setCity, fetchData }) => {
    return (
        <div className="weather-form">
            <input
                type="text"
                placeholder="Enter Location"
                value={city}
                onChange={(e) => setCity(e.target.value)}
            />
            <button onClick={fetchData}>Search</button>
            <img src={mainImage} alt="" />
        </div>
    );
};

export default WeatherForm;
