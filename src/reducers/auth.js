export default (state = {}, action) => {
  	switch (action.type) {
		case 'LOGIN':
		return {
			uid: action.user.uid,
			displayName: action.user.displayName,
			email: action.user.email,
			photoURL: action.user.photoURL
		};
		case 'LOGOUT':
			return {};
		default:
			return state;
  	}
};