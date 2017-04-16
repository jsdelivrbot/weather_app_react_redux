import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
	switch(action.type) {
		case 'FETCH_WEATHER':
			// intuitively you might want to .push payload data to the state
			// array. However, you don't want to mutate state, you want to 
			// create a new state. .concat is a better option, as follows:

			// return state.concat([action.payload.data]);

			// in ES6, the following line is equivalent
			return [ action.payload.date, ...state ]; // [city, city, city], NOT [city, [city, city]]
	}
	return state;
}