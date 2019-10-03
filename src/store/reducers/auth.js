export default function authReducer(action, state = false) {
	// console.debug(state);
	switch (action.type) {
		case 'LOGIN':
			if (action.payload) {
				const data = atob(action.payload.split('.')[1]);
				localStorage.setItem('user', data);
				localStorage.setItem('token', action.payload);
			}
			return true;
		case 'LOGOUT':
			localStorage.clear();
			return false;
		default:
			return state;
	}
}
