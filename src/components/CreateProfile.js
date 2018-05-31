import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import { onUpdateProfile } from '../actions/profile';
import { createProfileView } from '../actions/filters';
import { changePageView } from '../actions/filters';

export class CreateProfile extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			dob: '',
			height: '',
			gender: '',
			startWeight: '',
			goalWeight: '',
			createdAt: moment(),
			error: ''
		};
	};

	onDobChange = (e) => {
		const dob = e.target.value;
		this.setState(() => ({ dob }))
	};

	onHeightChange = (e) => {
		const height = e.target.value;
		this.setState(() => ({ height }))
	};

	onGenderChange = (e) => {
		const gender = e.target.value;
		this.setState(() => ({ gender }));
	};

	onStartWeightChange = (e) => {
		const startWeight = e.target.value;
		this.setState(() => ({ startWeight }))
	};

	onGoalWeightChange = (e) => {
		const goalWeight = e.target.value;
		this.setState(() => ({ goalWeight }))
	};

	onSubmit = (e) => {
		e.preventDefault();
		const profile = {
			dob: this.state.dob,
			height: this.state.height,
			gender: this.state.gender,
			startWeight: this.state.startWeight,
			goalWeight: this.state.goalWeight,
			createdAt: this.state.createdAt.valueOf()
		};

        const weight = {
            weight: this.state.startWeight,
            createdAt: this.state.createdAt.valueOf()
		};
		
		if (
			profile.dob !== '' &&
			profile.dob.length === 8 &&
			profile.height !== '' &&
			profile.gender !== '' &&
			profile.startWeight !== '' &&
			profile.goalWeight !== ''
		) {
			this.props.createProfileView();
			this.props.onUpdateProfile(profile);
			this.props.changePageView('Overview');
		} else {
			this.setState(() => ({ error: 'Please fill out all of the fields.'}));
		}
	};

	render() {
		return (
			<section className="createProfile">
				<h2>Let's update your profile.</h2>
				<form className="createProfile__form" onSubmit={this.onSubmit}>
					<section className="createProfile__inputGroup">
						<input
							className="createProfile__input"
							type="number"
							placeholder= ' '
							value={this.state.dob}
							onChange={this.onDobChange}
							
						/>
						<label>DOB (MMDDYYYY)</label>
					</section>
					<section className="createProfile__inputGroup">
						<input
							className="createProfile__input"
							type="number"
							placeholder= ' '
							value={this.state.hieght}
							onChange={this.onHeightChange}
							
						/>
						<label>Height (inches)</label>
					</section>
					<section className="createProfile__gender">
						<label className="createProfile__genderOption">
							<input type="radio" value="male" 
								checked={this.state.gender === 'male'} 
								onChange={this.onGenderChange} 
							/>
							Male
						</label>
						<label className="createProfile__genderOption">
							<input type="radio" value="female" 
								checked={this.state.gender === 'female'} 
								onChange={this.onGenderChange} 
							/>
							Female
						</label>
					</section>
					<section className="createProfile__inputGroup">
						<input
							className="createProfile__input"
							type="number"
							placeholder= ' '
							value={this.state.startWeight}
							onChange={this.onStartWeightChange}
							
						/>
						<label>Starting Weight (lbs)</label>
					</section>
					<section className="createProfile__inputGroup">
						<input
							className="createProfile__input"
							type="number"
							placeholder= ' '
							value={this.state.goalWeight}
							onChange={this.onGoalWeightChange}
							
						/>
						<label>Goal Weight (lbs)</label>
					</section>

					{this.state.error !== '' &&
						<p className="createProfile__error">{this.state.error}</p>
					}

					<button type="submit" className="createProfile__submit">
						Save
					</button>
				</form>
			</section>
		);
	};

};

const mapDispatchToProps = (dispatch) => ({
	onUpdateProfile: (profile) => dispatch(onUpdateProfile(profile)),
	createProfileView: () => dispatch(createProfileView()),
	changePageView: (page) => dispatch(changePageView(page))
  });

export default connect(undefined, mapDispatchToProps)(CreateProfile);