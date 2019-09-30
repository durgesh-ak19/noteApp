import React from "react";
import Titles from "./components/titles.js";
import Form from "./components/form.js";
import Weather from "./components/weather";

const API_KEY = "86bb1ea676402c6fdb8933886c649c5d";

class App extends React.Component {

  state = {
    temperature: undefined,
    city: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  }

  getWeather = async (e) => {

    e.preventDefault();

    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch('http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=3f372e8c766e7c75e2d236d0abdef2c1');
    const data = await api_call.json();

    if (city && country) {
      console.log(data);
      this.setState({
        //  temperature: data.main.temp,
        //  city: data.sys.name,
        //  country: data.sys.country,
        //  humidity: data.main.humidity,
        //  description: data.weather[0].description,
        error: ""

      });
    } else {
      this.setState({
        temperature: undefined,
        city: undefined,
        humidity: undefined,
        description: undefined,
        error: "Please Enter the value"
      });
    }
  }
  render() {
    return (
      <div>
        <div className="wrapper">
          <div className="main">
            <div className="row">
              <div className="col-xs-5 title-container">
                <Titles />
              </div>
              <div className="col-xs-7 form-container">
                <Form getWeather={this.getWeather} />
                <Weather
                  temperature={this.state.temperature}
                  city={this.state.city}
                  country={this.state.country}
                  humidity={this.state.humidity}
                  description={this.state.description}
                  error={this.state.error}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default App;