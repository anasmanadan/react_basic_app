
const simpleReducers = (state = {

		isLoading: false,
		showPop: false,
		data: []

	}, action) => {
	switch (action.type) {
		case 'SIMPLE_ACTION':
			return {
				...state,
				isLoading: true,
				result: action.payload
			}
		case 'SETTING_VALUE':
			return {
				...state,
				[action.payload.key]: action.payload.value
			}
		case 'API_SUCCESS':
			return {
				...state,
				results : action.payload
			}
		case 'FETCH_USERS':
			return {
				...state,
				isLoading : true
			}
		case 'FETCH_USERS_SUCCESS':
			return {
				...state,
				data : action.payload,
				isLoading : false
			}
		default:
			return state
	}
}

export default simpleReducers;