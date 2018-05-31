import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import currentWeight from '../selectors/currentWeight';
import currentProfile from '../selectors/currentProfile';

export class Profile extends React.Component {
    constructor(props) {
        super(props);
    };
    
    render() {
        return (
            <div className="profile">
                <img src={this.props.auth.photoURL} className="profile__photo" />
                <h3 className="profile__displayName">{this.props.auth.displayName}</h3>
                <section className="profile__stats">
                    <div className="profile__items">
                        <div className="profile__item">
                            <h4>Age</h4>
                            <p>
                                { moment().diff(moment(this.props.profile.dob, 'MMDDYYYY'), 'years') }
                            </p>
                        </div>
                        <div className="profile__item">
                            <h4>Height</h4>
                            <p>
                                {Math.floor(this.props.profile.height / 12)}'
                                {this.props.profile.height % 12}"
                            </p>
                        </div>
                        <div className="profile__item">
                            <h4>Weight</h4>
                            <p>{this.props.currentWeight.weight}</p>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
};

const mapStateToProps = (state) => {
    return {
        auth: state.auth,
        currentWeight: state.weight.weightHistory.length > 0 ? currentWeight(state.weight) : state.weight,
        profile: currentProfile(state.profile)
    };
};

export default connect(mapStateToProps)(Profile);