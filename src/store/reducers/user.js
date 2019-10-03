export default function userReducer(action, state = null) {
	// console.debug(state);
	switch (action.type) {
		case 'LOGIN':
			return action.payload;
		case 'LOGOUT':
			return null;
		default:
			return state;
	}
}
