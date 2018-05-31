import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { startGoogleLogin, startFacebookLogin } from '../actions/auth';
import FaFacebook from 'react-icons/lib/fa/facebook';
import FaGoogle from 'react-icons/lib/fa/google';

export class LoginPage extends React.Component {
	constructor(props) {   
		super(props);
	};

	render() {
		return (
			<div className="container__page">
				<div className="login">
					<section className="login__content">
						<h1 className="login__title">Weight Crunch</h1>
						<section className="login__loginButtons">
							<p className="login__directions">Sign in to get started.</p>
							<div
								className="login__icon"
								onClick={this.props.startFacebookLogin}
							>
								<FaFacebook />
								<p>&emsp;Login With Facebook</p>
							</div>
							<div
								className="login__icon"
								onClick={this.props.startGoogleLogin}
							>
								<FaGoogle />
								<p>&emsp;Login With Google</p>
							</div>
						</section>
						<p>&copy; 2018. All rights reserved.</p>
					</section>
				</div>
			</div>
		);
	};
};

const mapDispatchToProps = (dispatch) => ({
  	startGoogleLogin: () => dispatch(startGoogleLogin()),
  	startFacebookLogin: () => dispatch(startFacebookLogin())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);
