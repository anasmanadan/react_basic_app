
import axios from 'axios';

const Middleware = store => next => action => {
	console.log("Middleware triggered:", store.getState());
	switch ( action.type ) {
		case 'SETTING_VALUE':
			console.log('setting value', action.payload );
			break;
		case 'FETCH_USERS':
			let params = { 
					params: {
					ID: 12345
				}
			}
			axios.get('https://jsonplaceholder.typicode.com/users', params )
			.then(res => {
				store.dispatch({ type: 'FETCH_USERS_SUCCESS', payload: res.data });
				console.log(res);
			}).catch(err => {
				console.log(err);
			});
			break;
		default :
			break;	
	}
	next(action);
}

export default Middleware;