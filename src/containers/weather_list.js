import React, { Component } from 'react';
import { connect } from 'react-redux';

class WeatherList extends Component {

	renderWeather(cityData) {
		console.log('City data: ', cityData);
		return (
			<tr>
				<td>{cityData.city.name}</td>
			</tr>
		);
	}

	render() {
		return (
			<table className="table table-hover">
				<thead>
					<tr>
						<th>City</th>
						<th>Temperature</th>
						<th>Pressure</th>
						<th>Humidity</th>						
					</tr>
				</thead>
				<tbody>
					{this.props.weather.map(this.renderWeather)}
				</tbody>
			</table>
		);
	}
}

function mapStateToProps({ weather }) {
	return { weather };

	// note this is equivalent to receiving the argument state.weather
	// instead of { weather }, and returning { weather: state.weather }
	// instead of { weather }
	// ie mapStateToProps(state.weather) === mapStateToProps({ weather })
	// && return {weather: state.weather} === return { weather };
}

export default connect(mapStateToProps)(WeatherList);