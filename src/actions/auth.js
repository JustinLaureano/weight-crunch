import { firebase, googleAuthProvider, facebookAuthProvider } from '../firebase/firebase';

export const login = (user) => ({
	type: 'LOGIN',
	user
});

export const startGoogleLogin = () => {
	return () => {
		return firebase.auth().signInWithPopup(googleAuthProvider);
	};
};

export const startFacebookLogin = () => {
	return () => {
		return firebase.auth().signInWithPopup(facebookAuthProvider);
	};
};

export const logout = () => ({
	type: 'LOGOUT'
});

export const startLogout = () => {
	return () => {
		return firebase.auth().signOut();
	};
};
