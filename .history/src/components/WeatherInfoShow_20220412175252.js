import React from 'react';
import imagex from '../icons/cloudy.svg';
import { WeatherIcons } from '../App';

import sunset from '../icons/temp.svg';
import sunrise from '../icons/temp.svg';
import humidity from '../icons/humidity.svg';
import wind from '../icons/wind.svg';
import pressure from '../icons/pressure.svg';

// export default const WeatherInfoIcons = {
// sunset: '../icons/temp.svg',
// sunrise: '../icons/temp.svg',
// humidity: '../icons/humidity.svg',
// wind: '../icons/wind.svg',
// pressure: '../icons/pressure.svg',
// };
const WeatherInfoShow = ({ weatherData, gotData, isDay }) => {
    console.log(weatherData);
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
                        <img src={imagex} alt="" />
                    </div>
                    <hr className="line" />
                    <div className="other-info">
                        <p>Other Info</p>
                        <div className="other-info-data">
                            <div className="item">
                                <img src={sunrise} alt="" />
                                <div className="sub-info">
                                    <p className="data">22</p>
                                    <p className="sub-info-title">sunrise</p>
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
