import React from 'react';

import Title from './component/Title';
import Form from './component/Form';
import Weather from './component/Weather';

const API_KEY = 'cc358658c65d807263abe0336b9bcc12';

class App extends React.Component {
    state = {
        temperature: undefined,
        humidity: undefined,
        city: undefined,
        country: undefined,
        weather: undefined,
        wind: undefined,
        sunset: undefined,
    }
    getWeather = async (e) => {
        e.preventDefault();
        const city = e.target.elements.city.value;
        const country = e.target.elements.country.value;
        const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
        const data = await api_call.json();
        if (city && country) {
            console.log(data);
            this.setState({
                temperature: data.main.temp,
                humidity: data.main.humidity,
                city: data.name,
                country: data.sys.country,
                weather: data.weather[0].main,
                wind: data.wind.speed,
                sunset: data.sys.sunset,
                sunrise: data.sys.sunrise,
                error: ""
            })
        } else {
            this.setState({
                temperature: undefined,
                humidity: undefined,
                city: undefined,
                country: undefined,
                weather: undefined,
                wind: undefined,
                sunset: undefined,
                sunrise: undefined,
                error: "No data found. Please check the input!"
            })
        }
    }
    render() {
        return(
            <div>
            <div className="wrapper">
                <div className="main">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-5 title-container">
                                <Title />
                            </div>
                            <div className="col-xs-7 form-container">
                                <Form getWeather={this.getWeather} />
                                <Weather 
                                    temperature={this.state.temperature}
                                    humidity={this.state.humidity}
                                    city={this.state.city}
                                    country={this.state.country}
                                    weather={this.state.weather}
                                    wind={this.state.wind}
                                    sunset={this.state.sunset}
                                    sunrise={this.state.sunrise}
                                    error={this.state.error}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

export default App;