import React from 'react'

const Weather = props => (
    <div className="weather__info">
        { props.city && props.country && <p className="weather__key">Location : <span className="weather__value">{ props.city }, { props.country }</span></p> }
        { props.temperature && <p className="weather__key">Temperature : <span className="weather__value">{ props.temperature }&nbsp;&#176;C</span></p> }
        { props.humidity && <p className="weather__key">Humidity : <span className="weather__value">{ props.humidity } %</span></p> }
        { props.weather && <p className="weather__key">Weather : <span className="weather__value">{ props.weather }</span></p> }
        { props.wind && <p className="weather__key">Wind : <span className="weather__value">{ props.wind } m/s</span></p> }
        { props.sunset && <p className="weather__key">Sunset : <span className="weather__value">{ new Date (props.sunset).toLocaleDateString() }</span></p> }
        { props.sunrise && <p className="weather__key">Sunrise : <span className="weather__value">{ new Date (props.sunrise).toLocaleDateString() }</span></p> }
        { props.error && <p className="weather__error">{ props.error }</p> }
    </div>
);

export default Weather;