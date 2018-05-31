import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';

export class LoginPage extends React.Component {
  	constructor(props) {
		super(props);
		
		this.state = {
			name: '',
			email: '',
			password: ''
		}
	}

	onNameChange = (e) => {
		const name = e.target.value;
		this.setState(() => ({ name }));
	};

	onEmailChange = (e) => {
		const email = e.target.value;
		this.setState(() => ({ email }));
	};

	onPasswordChange = (e) => {
		const password = e.target.value;
		this.setState(() => ({ password }));
	};

	startSignUp = () => {
		console.log("start sign up");
	}
	  
	render() {
		return (
			<div className="container__page">
				<div className="signUp">
					<h1 className="signUp__title">Weight Crunch</h1>
					<h2 className="signUp__description">Sign Up</h2>
					<input
						className="signUp__input"
						type="text"
						placeholder="Name"
						value={this.state.name}
						onChange={this.onNameChange}
					/>
					<input
						className="signUp__input"
						type="email"
						placeholder="Email"
						value={this.state.email}
						onChange={this.onEmailChange}
					/>
					<input
						className="signUp__input"
						type="password"
						placeholder="Password"
						value={this.state.password}
						onChange={this.onPasswordChange}
					/>
					<button
						className="signUp__button"
						onClick={this.startSignUp}
					>
						Sign Up
					</button>
				</div>
		  </div>
		);
	};

};

const mapDispatchToProps = (dispatch) => ({

});

export default connect(undefined, mapDispatchToProps)(LoginPage);
