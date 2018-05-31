import React from 'react';
import { connect } from 'react-redux';
import FaPencil from 'react-icons/lib/fa/pencil';
import FaCheck from 'react-icons/lib/fa/check';
import FaClose from 'react-icons/lib/fa/close';
import { onGoalUpdate } from '../actions/profile';
import currentProfile from '../selectors/currentProfile';

export class SettingsGoal extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            editMode: false,
            goalWeight: this.props.profile.goalWeight,
            error: ''
        };
    };

    setEditMode = () => {
        const editMode = this.state.editMode === true ? false : true;
        this.setState(() => ({ editMode }));
    };

    onGoalWeightChange = (e) => {
		const goalWeight = e.target.value;
		this.setState(() => ({ goalWeight }))
    };
    
	onSubmit = (e) => {
		const goalWeight = this.state.goalWeight;
        const editMode = this.state.editMode === true ? false : true;

		if (goalWeight !== '' && goalWeight >= 0) {
            this.setState(() => ({ editMode }));
			this.props.onGoalUpdate(goalWeight, this.props.profile);
        }
        else {
			this.setState(() => ({ error: 'Please Enter a valid weight.'}));
		}
	};
    
    render() {
        return (
            <section className="settingsGoal">
                <section className="settingsGoal__heading">
                    <h4>Goals</h4>

                    {this.state.editMode === true ?
                        <section className="settingsGoals__editButtons">
                            <FaCheck onClick={this.onSubmit}/>
                            <FaClose onClick={this.setEditMode}/>
                        </section>
                        :
                        <FaPencil onClick={this.setEditMode} />
                    }
                </section>

                {this.state.error !== '' && 
                    <p className="settingsGoal__error">{this.state.error}</p>
                }

                <section className="settingsGoal__goals">
                    <section className="settingsGoal__goalItem">
                        <p>Goal Weight (lbs)</p>
                        {this.state.editMode === true ? 
                            <input
                                type="number"
                                className="settingsGoal__editGoalItem"
                                placeholder={this.props.profile.goalWeight}
                                value={this.state.goalWeight}
                                onChange={this.onGoalWeightChange}
                            /> 
                            :
                            <p>{this.props.profile.goalWeight} lbs</p>
                        }   
                    </section>
                </section>
            </section>
        );
    };
};

const mapStateToProps = (state) => {
    return {
        auth: state.auth,
        profile: currentProfile(state.profile)
    };
};

const mapDispatchToProps = (dispatch) => ({
	onGoalUpdate: (goalWeight, profile) => dispatch(onGoalUpdate(goalWeight, profile))
  });

export default connect(mapStateToProps, mapDispatchToProps)(SettingsGoal);