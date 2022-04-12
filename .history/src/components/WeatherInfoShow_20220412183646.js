import React from 'react';
import imagex from '../icons/cloudy.svg';
import { WeatherIcons } from '../App';

import sunset from '../icons/temp.svg';
import sunrise from '../icons/temp.svg';
import humidity from '../icons/humidity.svg';
import wind from '../icons/wind.svg';
import pressure from '../icons/pressure.svg';

console.log(imagex);
const WeatherInfoShow = ({ weatherData, gotData, isDay }) => {
    console.log(WeatherIcons['01d']);
    const getTime = (timeStamp) => {
        return `${new Date(timeStamp * 1000).getHours()}:${new Date(
            timeStamp * 1000
        ).getMinutes()}`;
    };
    return (
        <div className="weather-info-show">
            {gotData ? (
                <>
                    <div className="main-info">
                        <div className="info">
                            <div className="location">
                                {weatherData?.name} {weatherData?.sys.country}
                            </div>
                            <div className="data">
                                <span className="large">{`${Math.floor(
                                    weatherData?.main?.temp - 273
                                )}°C`}</span>{' '}
                                | {weatherData?.weather[0].description}
                            </div>
                        </div>
                        <img
                            src={WeatherIcons[weatherData?.weather[0].icon]}
                            alt="no icons"
                        />
                    </div>
                    <hr className="line" />
                    <div className="other-info">
                        <p>Other Info</p>
                        <div className="other-info-data">
                            <div className="item">
                                <img src={isDay ? sunset : sunrise} alt="" />
                                <div className="sub-info">
                                    <p className="data">{`${getTime(
                                        weatherData?.sys[
                                            isDay ? 'sunset' : 'sunrise'
                                        ]
                                    )}`}</p>
                                    <p className="sub-info-title">
                                        {isDay ? 'sunset' : 'sunrise'}
                                    </p>
                                </div>
                            </div>
                            <div className="item">
                                <img src={humidity} alt="" />
                                <div className="sub-info">
                                    <p className="data">
                                        {weatherData?.main.humidity}
                                    </p>
                                    <p className="sub-info-title">humidity</p>
                                </div>
                            </div>
                            <div className="item">
                                <img src={wind} alt="" />
                                <div className="sub-info">
                                    <p className="data">
                                        {weatherData?.wind?.speed}
                                    </p>
                                    <p className="sub-info-title">wind</p>
                                </div>
                            </div>
                            <div className="item">
                                <img src={pressure} alt="" />
                                <div className="sub-info">
                                    <p className="data">
                                        {weatherData?.main.pressure}
                                    </p>
                                    <p className="sub-info-title">pressure</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            ) : (
                ''
            )}
        </div>
    );
};

export default WeatherInfoShow;
