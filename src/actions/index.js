

export const simpleAction = () => {
	return {
		type: 'SIMPLE_ACTION',
		payload: 'result_of_simple_action'
	}
}

export const setValue = (key, value) => {
	return {
		type: 'SETTING_VALUE',
		payload: {key, value}
	}
}

export const fetchUser = () => {
	return {
		type: 'FETCH_USERS'
	}
}