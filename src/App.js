import React, { Component } from "react";
import "./App.sass";
import Weather from "./Components/Weather";
import Form from "./Components/Form";

const API_KEY = "544501eae3fcb9efc12f61b50208e0c1";
class App extends Component {
	state = {
		tempreature: "",
		city: "",
		country: "",
		humidity: "",
		description: "",
		error: "",
	};
	getWeather = async (e) => {
		e.preventDefault();
		const city = e.target.elements.city.value;
		const country = e.target.elements.country.value;
		const api = await fetch(
			`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`,
		);
		const data = await api.json();
		if (city && country) {
			this.setState({
				tempreature: data.main.temp,
				city: data.name,
				country: data.sys.country,
				humidity: data.main.humidity,
				description: data.weather[0].description,
				error: "",
			});
		} else {
			this.setState({
				tempreature: "",
				city: "",
				country: "",
				humidity: "",
				description: "",
				error: "plase enter data",
			});
		}
	};

	render() {
		return (
			<div className="App_parent">
				<div className="div_form">
					<Form getWeather={this.getWeather} />
					<Weather
						tempreature={this.state.tempreature}
						city={this.state.city}
						country={this.state.country}
						humidity={this.state.humidity}
						description={this.state.description}
						error={this.state.error}
					/>
				</div>
			</div>
		);
	}
}

export default App;
