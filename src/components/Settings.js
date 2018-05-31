import React from 'react';
import { connect } from 'react-redux';
import SettingsGoal from './SettingsGoal';
import SettingsProfile from './SettingsProfile';
import { startLogout } from '../actions/auth';
import { onSetProfile } from '../actions/profile';

export class Settings extends React.Component {
    constructor(props) {
        super(props);
    };

    onChangeProfile = (e) => {
        const profile = {
            dob: this.props.profile.dob,
            gender: e.target.id,
            createdAt: this.props.profile.createdAt
        };
        console.log(profile);
        this.props.onSetProfile(profile);
    };
    
    
    render() {
        return (
            <section className="dashboard__settings">
                <SettingsProfile />
                <SettingsGoal />
                <button className="settings__logoutButton" onClick={this.props.startLogout}>Logout</button>
            </section>
        );
    };
};

const mapStateToProps = (state) => {
    return {
        auth: state.auth
    };
}

const mapDispatchToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout()),
    onSetProfile: (profile) => dispatch(onSetProfile(profile)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Settings);