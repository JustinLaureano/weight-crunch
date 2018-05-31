import React from 'react';
import { connect } from 'react-redux';
import FaPencil from 'react-icons/lib/fa/pencil';
import FaCheck from 'react-icons/lib/fa/check';
import FaClose from 'react-icons/lib/fa/close';
import { onProfileUpdate } from '../actions/profile';
import currentProfile from '../selectors/currentProfile';


export class SettingsProfile extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            editMode: false,
            dob: this.props.profile.dob,
            height: this.props.profile.height,
            gender: this.props.profile.gender,
            error: ''
        };
    };

    setEditMode = () => {
        const editMode = this.state.editMode === true ? false : true;
        this.setState(() => ({ editMode }));
    };

    formatDate = (date) => {
        return [date.slice(0, 2), date.slice(2, 4), date.slice(4)].join('/');
    }

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

    onSubmit = (e) => {
		const newProfile = {
            dob: this.state.dob,
            height: this.state.height,
            gender: this.state.gender
        };
        const editMode = this.state.editMode === true ? false : true;

		if (
            newProfile.dob !== '' &&
			newProfile.dob.length === 8 &&
			newProfile.height !== '' &&
			newProfile.gender !== ''
        ) {
            this.setState(() => ({ editMode }));
			this.props.onProfileUpdate(newProfile, this.props.profile);
        }
        else {
			this.setState(() => ({ error: 'Please fill out all of the fields.' }));
		}
	};
    
    render() {
        return (
            <section className="settingsProfile">
                <section className="settingsProfile__heading">
                    <h4>Profile</h4>
                    {this.state.editMode === true ?
                        <section className="settingsProfile__editButtons">
                            <FaCheck onClick={this.onSubmit}/>
                            <FaClose onClick={this.setEditMode}/>
                        </section>
                        :
                        <FaPencil onClick={this.setEditMode} />
                    }
                </section>

                {this.state.error !== '' && 
                    <p className="settingsProfile__error">{this.state.error}</p>
                }

                <section className="settingsProfile__stats">
                    <section className="settingsProfile__statItem">
                        <p>Date of Birth</p>
                        {this.state.editMode === true ? 
                            <input
                                type="number"
                                className="settingsProfile__editProfileItem--dob"
                                placeholder="MMDDYYYY"
                                value={this.state.dob}
                                onChange={this.onDobChange}
                            /> 
                            :
                            <p>{ this.formatDate(this.props.profile.dob) }</p>
                        } 
                    </section>

                    <section className="settingsProfile__statItem">
                        <p>Height {this.state.editMode === true && <span>(inches)</span>}</p>
                        {this.state.editMode === true ? 
                            <input
                                type="number"
                                className="settingsProfile__editProfileItem"
                                placeholder={this.props.profile.height}
                                value={this.state.height}
                                onChange={this.onHeightChange}
                            /> 
                            :
                            <p>
                                {Math.floor(this.props.profile.height / 12)}'
                                {this.props.profile.height % 12}"
                            </p>
                        } 
                    </section>

                    <section className="settingsProfile__statItem">
                        <p>Gender</p>
                        {this.state.editMode === true ?
                            <section className="settingsProfile__statItem--gender">
                                <label className="settingsProfile__radioButton">
                                    <input
                                        type="radio"
                                        value="male" 
                                        checked={this.props.profile.gender === 'male'} 
                                        onChange={this.onGenderChange} 
                                    />
                                    Male
                                </label>
                                <label className="settingsProfile__radioButton">
                                    <input
                                        type="radio"
                                        value="female" 
                                        checked={this.props.profile.gender === 'female'} 
                                        onChange={this.onGenderChange} 
                                    />
                                    Female
                                </label>
                            </section>
                            :
                            <p>{this.props.profile.gender}</p>
                        } 
                    </section>

                </section>
            </section>
        );
    }
};

const mapStateToProps = (state) => {
    return {
        auth: state.auth,
        profile: currentProfile(state.profile)
    };
};

const mapDispatchToProps = (dispatch) => ({
	onProfileUpdate: (newProfile, profile) => dispatch(onProfileUpdate(newProfile, profile))
  });

export default connect(mapStateToProps, mapDispatchToProps)(SettingsProfile);